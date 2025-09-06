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
    
    // Fetch the file
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }
    
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
 * Downloads the CV file specifically
 */
export async function downloadCV(): Promise<void> {
  return downloadFile('/api/download-cv', {
    filename: 'Anouar_Ech-Charai_CV.pdf',
    fallbackUrl: '/Anouar_Professional_CV.pdf'
  });
}
