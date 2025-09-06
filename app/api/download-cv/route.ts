import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFileSync } from 'fs';

export async function GET(request: NextRequest) {
  try {
    // Path to the PDF file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'Anouar_Professional_CV.pdf');
    
    // Read the file
    const fileBuffer = readFileSync(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Anouar_Ech-Charai_CV.pdf"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}
