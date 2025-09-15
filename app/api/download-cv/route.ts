import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFileSync, existsSync, statSync } from 'fs';

export async function GET(request: NextRequest) {
  try {
    // Path to the PDF file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'Anouar_Professional_CV.pdf');
    
    console.log('CV Download requested, file path:', filePath);
    
    // Check if file exists
    if (!existsSync(filePath)) {
      console.error('CV file not found at path:', filePath);
      return new NextResponse('CV file not found', { status: 404 });
    }
    
    // Get file stats
    const stats = statSync(filePath);
    console.log('CV file size:', stats.size, 'bytes');
    
    if (stats.size === 0) {
      console.error('CV file is empty');
      return new NextResponse('CV file is empty', { status: 404 });
    }
    
    // Read the file
    const fileBuffer = readFileSync(filePath);
    
    console.log('CV file read successfully, buffer size:', fileBuffer.length);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="/Professional_CV_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-cache',
      },
    });
    
    return response;  } catch (error) {
    console.error('Error serving PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(`Error serving CV: ${errorMessage}`, { status: 500 });
  }
}
