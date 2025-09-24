import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Error from 'next/error';

export const config = {
  api: {
    bodyParser: false, // importante para poder usar FormData
  },
};

export async function POST(req: Request) {
  try {
    // Validar API Key
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey || apiKey !== process.env.INTERNAL_API_TOKEN) {
      console.log(apiKey);
      return NextResponse.json({ error: 'Invalid API Key' }, { status: 401 });
    }

    // Parsear el FormData
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validar extensión
    if (!file.name.endsWith('.txt')) {
      return NextResponse.json({ error: 'Only .txt files allowed' }, { status: 400 });
    }

    // Leer contenido del archivo
    const fileContent = await file.text();

    // Guardar archivo en disco
    const uploadPath = process.env.UPLOAD_PATH!;
    const filePath = path.join(uploadPath, file.name);
    await fs.writeFile(filePath, fileContent);

    return NextResponse.json({ ok: true, path: filePath });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
