
export default function PasoResumen({ data }) {
    console.log(data)
    return (
        <>
            <div className="h-full grid py-3 grid-cols-[40%_60%] rounded-lg px-3 justify-items-center">
                <div className="w-130 grid grid-rows-[6rem_4rem_1rem_1fr] bg-border p-2 rounded-lg shadow-md shadow-gray-500">
                    <div className="grid grid-cols-2 h-full place-items-center border-b-2 border-sky-500">
                        <div className="grid grid-rows-2 pt-2">
                            <img src="/mtc.png" className="w-50" alt="mtc"/>
                            <div className="flex flex-col text-xs">
                                <span>Certificado Electrónico</span>
                                <span>Decreto Supremo 015-2016 MTC</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-6xl font-extrabold text-sky-500">SOAT</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 place-items-center">
                        <div className="grid justify-items-center">
                            <img src={data.aseguradora.logo} className="w-3/4" alt="aseguradora" />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold">EN CASO DE EMERGENCIAS</span>
                            <span className="text-4xl font-extrabold text-interseguro">500 0000</span>
                        </div>
                    </div>
                    <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#0EA5E9_0_5px,#FFFFFF00_0px_10px)]">
                    </div>
                    <div className=" grid grid-rows-[4rem_1fr] justify-items-center text-sm px-5">
                        <div className="flex justify-center gap-1 items-center">
                            <span className="font-bold text-interseguro">Contratante:</span>
                            <span className="">{data.contratante.nombres} {data.contratante.apellido_paterno} {data.contratante.apellido_materno}</span>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">{data.contratante.tipo_documento}:</span>
                                    <span>{data.contratante.numero_documento}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Marca:</span>
                                    <span>{data.vehiculo.marcaNombre}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Uso:</span>
                                    <span>{data.vehiculo.uso}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Placa:</span>
                                    <span>{data.vehiculo.placa}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Desde:</span>
                                    <span>{data.aseguradora.inicio}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-interseguro">Zona de circulación:</span>
                                    <span>{data.vehiculo.departamento}</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Modelo:</span>
                                    <span>{data.vehiculo.modeloNombre}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Clase:</span>
                                    <span>{data.vehiculo.clase.label}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Año:</span>
                                    <span>{data.vehiculo.anio}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Nro. de asientos:</span>
                                    <span>{data.vehiculo.numero_asientos}</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-bold text-interseguro">Hasta:</span>
                                    <span>{data.aseguradora.fin}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-interseguro">Nro. de serie:</span>
                                    <span>{data.vehiculo.serie}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-xs px-5 text-gray-500">
                        <span>Los establecimientos de salud públicos y privados están obligados a
                            prestar atención médico quirúrgica de emergencia en caso de la
                            ocurrencia de un accidente de tránsito conforme en la Ley N° 26842, Ley
                            General de Salud y su Reglamento.</span>
                    </div>
                </div>
                <div className="w-full border-l-1 px-10 flex flex-col justify-center gap-5">
                    <div className="text-2xl font-bold">
                        <span>Vigencia del SOAT</span>
                    </div>
                    <div className="bg-primary-light2 text-black border-1 rounded-xl grid grid-cols-2 place-items-center py-5 text-2xl">
                        <div className="flex flex-col">
                            <span>Inicio de Vigencia:</span>
                            <span className="font-bold">{data.aseguradora.inicio}</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Fin de Vigencia:</span>
                            <span className="font-bold">{data.aseguradora.fin}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col bg-primary-light2 text-black border-1 border-primary rounded-lg w-100 items-center py-5">
                            <div className="text-2xl font-bold">
                                <span>Aseguradora</span>
                            </div>
                            <div>
                                <img src={data.aseguradora.logo} className="w-full" alt="aseguradora" />
                            </div>
                        </div>
                        <div className="flex flex-col bg-primary-light2 text-black border-1 border-primary rounded-lg w-100 items-center py-5">
                            <div className="text-2xl font-bold">
                                <span>Prima</span>
                            </div>
                            <div className="">
                                <span className="text-5xl font-extrabold">S/. {data.aseguradora.precio.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
