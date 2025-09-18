import SelectField from "../../../components/SelectField"
import InputField from "../../../components/InputField"

    const supervisores= [
      { label: "Todas", value: null },
      { label: "Empleado1", value: "1" },
      { label: "Empleado2", value: "2" },
      { label: "Empleado3", value: "5" },
    ]

    const puntosVenta = [
      { label: "Todas", value: null },
      { label: "Ica", value: "1" },
      { label: "Lima", value: "2" },
      { label: "Satipo", value: "6" },
    ];
export default function FiltrosVencimiento({filtros, onChange}){
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...filtros, [name]: value });
    };
    return(
        <>
            {/* Supervisor y puntos de venta */}
            <SelectField label="Supervisor" options={supervisores}  value={filtros.empleadoId ?? ""} name="empleadoId" onChange={handleChange}/>
            <SelectField label="Puntos de venta" options={puntosVenta}  value={filtros.puntoVentaId ?? ""} name="puntoVentaId" onChange={handleChange}/>
            <InputField label="Fecha inicio" type="date" value={filtros.desde ?? ""} name="desde" onChange={handleChange}/>
            <InputField label="Fecha fin" type="date"  value={filtros.hasta ?? ""} name="hasta" onChange={handleChange}/>
        </>
    )
}