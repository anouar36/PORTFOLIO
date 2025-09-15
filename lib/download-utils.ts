/**
 * Utility functions for file downloads
 */

export interface DownloadOptions {
  filename: string;
  fallbackUrl?: string;
}

/**
 * Downloads a file from a given URL or API endpoint
 * @param url - The URL to download from
 * @param options - Download options including filename and fallback URL
 */
export async function downloadFile(url: string, options: DownloadOptions): Promise<void> {
  try {
    console.log(`Attempting to download from: ${url}`);
    
    // Add a timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    // Fetch the file
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/pdf,*/*'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }
    
    // Check content type
    const contentType = response.headers.get('content-type');
    console.log(`Content-Type: ${contentType}`);
    
    // Check if response has content
    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) === 0) {
      throw new Error('File appears to be empty');
    }
    
    // Get the blob
    const blob = await response.blob();
    
    if (blob.size === 0) {
      throw new Error('Downloaded file is empty');
    }
    
    console.log(`Downloaded blob size: ${blob.size} bytes`);
    console.log(`Blob type: ${blob.type}`);
    
    // Create download link
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = options.filename;
    link.style.display = 'none';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
    console.log(`Successfully downloaded: ${options.filename}`);
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Try fallback URL if provided
    if (options.fallbackUrl) {
      console.log(`Trying fallback URL: ${options.fallbackUrl}`);
      
      try {
        const link = document.createElement('a');
        link.href = options.fallbackUrl;
        link.download = options.filename;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Fallback download triggered');
      } catch (fallbackError) {
        console.error('Fallback download also failed:', fallbackError);
        throw new Error('Both primary and fallback download methods failed');
      }
    } else {
      throw error;
    }
  }
}

/**
 * Downloads the CV file specifically with multiple fallback methods
 */
export async function downloadCV(): Promise<void> {
  const filename = 'Anouar_Ech-Charai_CV.pdf';
  
  // Method 1: Try API route first
  try {
    console.log('Trying method 1: API route');
    await downloadFile('/api/download-cv', { filename });
    return;
  } catch (error) {
    console.warn('Method 1 failed:', error);
  }
  
  // Method 2: Try direct file access
  try {
    console.log('Trying method 2: Direct file access');
    await downloadFile('/Anouar_Professional_CV.pdf', { filename });
    return;
  } catch (error) {
    console.warn('Method 2 failed:', error);
  }
  
  // Method 3: Force download with window.open
  try {
    console.log('Trying method 3: Force download');
    const link = document.createElement('a');
    link.href = '/Anouar_Professional_CV.pdf';
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Force click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Method 3 executed successfully');
    return;
  } catch (error) {
    console.error('Method 3 failed:', error);
  }
  
  throw new Error('All download methods failed');
}
