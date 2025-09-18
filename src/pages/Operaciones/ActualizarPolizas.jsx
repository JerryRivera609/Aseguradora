import { FaUpload, FaFileCsv } from "react-icons/fa";
import { useRef, useState } from "react";

export default function ActualizarPolizas() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-11/12 max-w-[1400px] pt-6 font-inter">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Actualizar Estado de Pólizas (CSV)</h2>
        <div className="text-sm text-right">
          <p className="font-semibold flex items-center gap-2">
            <FaFileCsv /> Subida de archivo
          </p>
        </div>
      </div>

      {/* Upload CSV */}
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl py-12 px-6 bg-background">
        <FaUpload className="text-4xl text-primary mb-4" />
        <p className="mb-2 font-medium text-foreground-muted">
          Arrastra un archivo .CSV aquí o
        </p>
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-primary hover:bg-primary-hover hover:cursor-pointer text-container px-6 py-2 rounded-md"
        >
          Seleccionar archivo
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept=".csv"
          className="hidden"
          onChange={handleUpload}
        />
        {fileName && (
          <p className="mt-4 text-sm text-success">
            Archivo seleccionado: <span className="font-semibold">{fileName}</span>
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-success text-container px-6 py-2 rounded-lg hover:bg-success transition">
          Actualizar estados
        </button>
      </div>
    </div>
  );
}
