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
            <div className="grid grid-cols-1 grid-rows-[6rem_1.5rem_4rem_1fr]">
                
                {/* Encabezado */}
                <div className="flex justify-between w-full bg-container md:px-4 rounded-lg border-1 border-border">
                    <div className="text-4xl font-bold flex items-center gap-2">
                        <IoPricetagSharp />
                        <h1>SOAT Vendidos</h1>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-1 font-inter">
                            <FaBuilding />
                            <span>LIMA-SUIR</span>
                        </div>
                        <div className="flex items-center gap-1 font-inter mt-2">
                            <FaStoreAlt />
                            <div className="relative">
                                <select className="w-full p-1.5 rounded-2xl focus:outline-primary">
                                    <option>Punto de Venta 1</option>
                                    <option>Punto de Venta 2</option>
                                    <option>Punto de Venta 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <Breadcrumb items={breadcrumbItems} />

                {/* Sub-header */}
                <div className="flex justify-between py-3 mb-4 items-center bg-container rounded-2xl p-2">
                    <h3 className="text-xl font-semibold">Cotiza y Vende un SOAT al Mejor Precio</h3>
                    <Link
                        to="/ventas/generar"
                        className="bg-primary text-container font-inter p-2 rounded-2xl transition-all duration-500 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.3)] hover:bg-primary-hover"
                    >
                        Vender SOAT
                    </Link>
                </div>

                {/* Tabla de pólizas (maquetada) */}
                <div className="overflow-x-auto bg-container rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-2">Nro de póliza</th>
                                <th className="px-3 py-2">Placa / Uso</th>
                                <th className="px-3 py-2">Contratante / Teléfono</th>
                                <th className="px-3 py-2">Fecha Venta</th>
                                <th className="px-3 py-2">Fecha Vigencia</th>
                                <th className="px-3 py-2">Prima</th>
                                <th className="px-3 py-2">Aseguradora</th>
                                <th className="px-3 py-2">Estado</th>
                                <th className="px-3 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-3 py-2">123456</td>
                                <td className="px-3 py-2">ABC-123</td>
                                <td className="px-3 py-2">Juan Pérez / 999999999</td>
                                <td className="px-3 py-2">2025-09-01</td>
                                <td className="px-3 py-2">2026-09-01</td>
                                <td className="px-3 py-2">S/ 150.00</td>
                                <td className="px-3 py-2">Pacífico</td>
                                <td className="px-3 py-2">Activo</td>
                                <td className="px-3 py-2">
                                    <button className="text-blue-600">Ver</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-3 py-2">654321</td>
                                <td className="px-3 py-2">XYZ-987</td>
                                <td className="px-3 py-2">María López / 988888888</td>
                                <td className="px-3 py-2">2025-08-10</td>
                                <td className="px-3 py-2">2026-08-10</td>
                                <td className="px-3 py-2">S/ 180.00</td>
                                <td className="px-3 py-2">Rímac</td>
                                <td className="px-3 py-2">Inactivo</td>
                                <td className="px-3 py-2">
                                    <button className="text-blue-600">Ver</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Paginación */}
                <div className="flex relative justify-end select-none mt-3">
                    <div className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light">
                        <MdOutlineNavigateBefore className="text-[20px]" />
                    </div>
                    <div className="border border-orange-300 grid place-items-center w-8 h-8 rounded-full select-none">
                        <span className="text-[1.1rem] text-gray-700">1</span>
                    </div>
                    <div className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light">
                        <MdOutlineNavigateNext className="text-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
