import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { existsSync, statSync } from 'fs';

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Anouar_Professional_CV.pdf');
    
    const exists = existsSync(filePath);
    let fileSize = 0;
    let isReadable = false;
    
    if (exists) {
      const stats = statSync(filePath);
      fileSize = stats.size;
      isReadable = stats.isFile();
    }
    
    return NextResponse.json({
      exists,
      filePath,
      fileSize,
      isReadable,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
