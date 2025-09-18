import Card from "../../../../components/Card";
const rimac = {
                nombre: "Rimac",
                id_empresa: 3,
                id_cotizacion: "123123123",
                precio: 0,
                moneda: "",
                inicio: "",
                fin: "",
              };
const interseguro = {
                nombre: "Interseguro",
                id_empresa: 4,
                id_cotizacion: "1231231231",
                precio: 174.30,
                moneda: "S/.",
                inicio: "03/09/2025",
                fin: "03/09/2026",
              };
const mapfre = {
                nombre: "Mapfre",
                id_empresa: 2,
                id_cotizacion: "1231231231",
                precio: 174.30,
                moneda: "S/.",
                inicio: "03/09/2025",
                fin: "03/09/2026",
              };
const positiva = {
                nombre: "Positiva",
                id_empresa: 1,
                id_cotizacion: "1231231231",
                precio: 174.30,
                moneda: "S/.",
                inicio: "03/09/2025",
                fin: "03/09/2026",
              };
export default function PasoAseguradora({ data, onChange }) {
  
  return (
    <>
      <div className="w-full border-b border-border mb-2">
        <h2 className="text-lg font-semibold px-4 py-2">Elija su aseguradora:</h2>
      </div>

      <div className="w-full py-10 px-4 font-inter">
        <div className="max-w-[1240px] mx-auto flex justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            {/* {data.map((cot, idx) => {
              const card = {
                nombre: cot?.aseguradora ?? "",
                logo: cot?.logo ?? "",
                id_empresa: cot?.id_empresa ?? "",
                id_cotizacion: cot?.id_cotizacion,
                precio: cot?.precio,
                moneda: cot?.moneda,
                inicio: cot?.inicio,
                fin: cot?.fin,
              };

              return (
                <div key={cot.id_cotizacion || idx} className="flex-1 min-w-[250px] max-w-[300px]">
                  <Card
                    card={card}
                    onSelect={() => onChange(card)}
                    selected={false}
                  />
                </div>
              );
            })} */}
            <div className="flex-1 min-w-[250px] max-w-[300px]">
              <Card
                onSelect={() => onChange(interseguro)}
                card={interseguro}
                selected={false}
              />
            </div>
            <div className="flex-1 min-w-[250px] max-w-[300px]">
              <Card
                onSelect={() => onChange(mapfre)}
                card={mapfre}
                selected={false}
              />
            </div>
            <div className="flex-1 min-w-[250px] max-w-[300px]">
              <Card
                onSelect={() => onChange(positiva)}
                card={positiva}
                selected={false}
              />
            </div>
            <div className="flex-1 min-w-[250px] max-w-[300px]">
              <Card
                card={rimac}
                disabled
                selected={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}