import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';


export async function GET(req: Request) {
  try {
    // Validar API Key
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey || apiKey !== process.env.INTERNAL_API_TOKEN) {
      console.log(apiKey);
      return NextResponse.json({ error: 'Invalid API Key' }, { status: 401 });
    }
    const url = new URL(req.url);
    const name = url.searchParams.get('name');

    if (!name) {
      return NextResponse.json({ error: 'Missing "name" parameter' }, { status: 400 });
    }

    const uploadPath = process.env.UPLOAD_PATH!;
    const filePath = path.join(uploadPath, `${name}.txt`);

    // Leer archivo
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const content = await fs.readFile(filePath, 'utf-8');
    return new NextResponse(content, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
