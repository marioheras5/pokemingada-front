"use client";
import { useState } from "react";

export default function Upload() {

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [jugador, setJugador] = useState("stick");
  const [popup, setPopup] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Validar extensión
    if (selected.type !== "text/plain") {
      setError("Solo se permiten archivos .txt");
      setFile(null);
      return;
    }

    // Validar tamaño (máx 1 MB)
    if (selected.size > 1024 * 1024) {
      setError("El archivo no puede superar 1 MB");
      setFile(null);
      return;
    }

    // Todo correcto ✅
    setError("");
    setFile(selected);
  }

  async function uploadFile() {

    const json: {[playerName: string]: [string, string, string]} = {
      "anxoa": ["0","8","0"],
      "bmage": ["1","5","3"],
      "brawnio": ["3","1","3"],
      "dasen": ["4","1","4"],
      "daude": ["3","2","5"],
      "derial": ["0","8","0"],
      "hibi": ["5","2","9"],
      "kush": ["5","1","9"],
      "noifred": ["5","3","13"],
      "stick": ["5","2","7"]
    };

    const filename = jugador + ".txt";
    const addScore = json[jugador][0] + ":$:" + json[jugador][1] + ":$:" + json[jugador][2] + ":$:";

    const text = addScore + (await file?.text());
    const resultFile = new File([text], filename, {type: file?.type});
    const formData = new FormData();
    formData.append('file', resultFile);

    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_INTERNAL_API_TOKEN!,
      },
      body: formData,
    });

    if (res.ok) {
      setPopup(true);
    }
  }

  return (
    <div className="relative w-full h-161 flex justify-center items-top">
      <div className="w-230 h-fit mt-10 p-6 pb-8 bg-neutral-950/95 border-2 rounded-xs border-neutral-800/80 backdrop-blur-xs ">
        <h1 className="pb-4 pt-2 pl-2 border-b-1 mb-6">
          SUBIDA DE FICHEROS Y ACTUALIZACION DE SCORES
        </h1>
        <div className="justify-center items-center flex h-16 p-4 m-4 border-1 border-white">
          <label>
            Elige el jugador:
          </label>
          <select 
            value={jugador}
            onChange={(e) => setJugador(e.target.value)}
            id="user" className="bg-white text-black ml-4 p-1">
              <option value="stick">Stick</option>
              <option value="noifred">Noifred</option>
              <option value="anxoa">Anxoa</option>
              <option value="bmage">Bmage</option>
              <option value="brawnio">Brawnio</option>
              <option value="dasen">Dasen</option>
              <option value="daude">Daude</option>
              <option value="kush">Kush</option>
              <option value="hibi">Hibi</option>
              <option value="derial">Derial</option>
            </select>
        </div>
        <div className="p-4 m-4 flex h-20 justify-center items-center flex-row gap-2 border-1 border-white">
          <div>Sube el fichero showdown.txt:</div>
          <input className="hover:bg-white hover:cursor-pointer h-10 flex justify-center items-center text-black bg-gray-400 w-80" type="file" accept=".txt" onChange={handleChange} />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {file && (
            <p className="text-sm text-gray-300">
              Archivo: <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB) ✅
            </p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <div onClick={uploadFile} className="hover:bg-white hover:cursor-pointer h-12 text-2xl text-black bg-gray-400 w-60 flex justify-center items-center">
            Enviar
          </div>
        </div>
      </div>
      ({popup && <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Fondo oscuro semi-transparente */}
          <div
            className="absolute inset-0 bg-black opacity-50 hover:cursor-pointer"
            onClick={() => setPopup(false)} // clic en fondo cierra modal
          ></div>

          {/* Contenido del modal */}
          <div className="bg-gray-900 p-6 z-10 shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-bold mb-4">¡Archivo subido con exito!</h2>
            <button
              onClick={() => setPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-200 text-black rounded hover:cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>})
    </div>
  );
}