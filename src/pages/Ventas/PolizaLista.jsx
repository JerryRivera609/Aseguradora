import { Link } from "react-router-dom";

import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";

import Breadcrumb from "../../components/Breadcrumb";

export default function PolizaLista() {
    const breadcrumbItems = [
        { to: "/dashboard", icon: <AiFillHome />, label: "" },
        { to: "/dashboard", label: "Ventas de SOAT" },
        { to: "/ventas/listaPolizas", label: "SOAT Vendidos" },
    ];

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-full pt-6 font-inter text-foreground">
        <div className="grid grid-cols-1 grid-rows-[6rem_1.5rem_4rem_1fr] gap-4">

            {/* Encabezado */}
            <div className="flex justify-between w-full bg-container md:px-6 rounded-2xl border border-border p-4 shadow-sm">
                <div className="text-3xl font-bold flex items-center gap-2">
                    <IoPricetagSharp className="text-primary" />
                    <h1>SOAT Vendidos</h1>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex items-center gap-1 font-inter">
                        <FaBuilding className="text-primary" />
                        <span>LIMA-SUIR</span>
                    </div>
                    <div className="flex items-center gap-1 font-inter">
                        <FaStoreAlt className="text-primary" />
                        <select className="w-40 p-1.5 rounded-xl border border-border bg-background focus:outline-primary">
                            <option>Punto de Venta 1</option>
                            <option>Punto de Venta 2</option>
                            <option>Punto de Venta 3</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Sub-header */}
            <div className="flex justify-between items-center bg-container rounded-2xl p-4 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold">Cotiza y Vende un SOAT al Mejor Precio</h3>
                <Link
                    to="/ventas/generar"
                    className="bg-primary text-container font-inter px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-primary-hover"
                >
                    Vender SOAT
                </Link>
            </div>

            {/* Tabla vacía (maquetada) */}
            <div className="overflow-x-auto bg-container rounded-2xl border border-border shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-100 text-gray-600 text-sm">
                        <tr>
                            <th className="px-4 py-3">Nro de póliza</th>
                            <th className="px-4 py-3">Placa / Uso</th>
                            <th className="px-4 py-3">Contratante / Teléfono</th>
                            <th className="px-4 py-3">Fecha Venta</th>
                            <th className="px-4 py-3">Fecha Vigencia</th>
                            <th className="px-4 py-3">Prima</th>
                            <th className="px-4 py-3">Aseguradora</th>
                            <th className="px-4 py-3">Estado</th>
                            <th className="px-4 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="9" className="text-center py-10 text-gray-400">
                                No hay datos disponibles
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            <div className="flex relative justify-end select-none mt-3 gap-2">
                <div className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light">
                    <MdOutlineNavigateBefore className="text-[20px]" />
                </div>
                <div className="border border-primary grid place-items-center w-8 h-8 rounded-full">
                    <span className="text-[1rem] text-gray-700">1</span>
                </div>
                <div className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light">
                    <MdOutlineNavigateNext className="text-[20px]" />
                </div>
            </div>
        </div>
    </div>
);

}
