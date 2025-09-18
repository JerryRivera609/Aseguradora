import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";

export default function PlanillaLote() {
  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-11/12 max-w-[1400px] pt-6 font-inter">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Generar Planilla de Lote</h2>
        <div className="text-sm text-right">
          <p className="font-semibold flex items-center gap-2">
            <FaFileAlt /> Agrupación por punto de venta
          </p>
        </div>
      </div>

      {/* Selección de filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium">Rango Desde</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Rango Hasta</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Punto de venta</label>
          <select className="w-full p-2 border rounded-md">
            <option value="">Todos</option>
            <option value="Lima">Lima</option>
            <option value="Arequipa">Arequipa</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full bg-primaryhover text-container py-2 rounded-md flex items-center justify-center gap-2">
            <FaDownload /> Generar Planilla
          </button>
        </div>
      </div>

      <div className="border-t pt-6 text-center">
        <FaCheckCircle className="text-4xl text-success mx-auto mb-2" />
        <p className="font-semibold text-foreground-muted">
          La planilla se generará en formato Excel con el resumen agrupado por
          punto de venta.
        </p>
      </div>
    </div>
  );
}
