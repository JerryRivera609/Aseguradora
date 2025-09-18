import InputField from "../../../../components/InputField";

export default function PasoFecha({data, onChange, onClick}){

    const toUTC = (dateStr) => {
      if (!dateStr) return "";
      return new Date(dateStr).toISOString(); 
    };

    async function handleClick (){
        try {
            const ok = await onClick();
            // const ok = true
            if (!ok) {
                return
            }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <div className="w-full border-b border-border mb-2">
                <h2 className="text-lg font-semibold px-4 py-2">Elija su Fecha de vigencia:</h2>
            </div>
            <div className="flex justify-center items-center space-x-10 text-2xl">
                <div className="w-50 grid place-items-center">
                    <InputField
                        label="Fecha vigencia"
                        type="date"
                        value={data.fecha_vigencia ? data.fecha_vigencia.split("T")[0] : ""}
                        name="fecha_vigencia"
                        onChange={(e) => {
                            const vigencia = e.target.value;
                            // convertir a Date
                            const inicio = new Date(vigencia);
                            const dias365 = 366 * 24 * 60 * 60 * 1000;
                            const fin = new Date(inicio.getTime() + dias365);
                            // formatear YYYY-MM-DD
                            const yyyy = fin.getFullYear();
                            const mm = String(fin.getMonth() + 1).padStart(2, "0");
                            const dd = String(fin.getDate()).padStart(2, "0");
                            const fechaCaducidad = `${yyyy}-${mm}-${dd}`;
                            onChange({
                            fecha_vigencia: toUTC(vigencia),
                            fecha_caducidad: toUTC(fechaCaducidad),
                            });
                        }}
                    />
                </div>
                <div className="w-50 grid place-items-center">
                    <InputField
                        label="Fecha fin"
                        type="date"
                        value={data.fecha_caducidad ? data.fecha_caducidad.split("T")[0] : ""}
                        name="fecha_caducidad"
                        disabled
                    />
                </div>
                <div className="w-50 grid place-items-center">
                    <button className="bg-primary w-full hover:scale-105 duration-100 transition-all ease-in hover:cursor-pointer hover:bg-primary-hover text-primary-light rounded-2xl py-3" onClick={handleClick}>
                        Cotizar
                    </button>
                </div>
            </div>
        </>
    )
}