export default function Card({ card, onSelect, selected ,disabled}) {

  const colorEmpresa = 
    card.id_empresa===1 ? "bg-positiva-light" : 
      (card.id_empresa===2 ? "bg-mapfre-light" : 
        (card.id_empresa===3 ? "bg-rimac-light" : 
          (card.id_empresa===4 ? "bg-interseguro-light" :""
      )))

  return (
    <div
      onClick={() => onSelect && onSelect(card)}
      className={`w-full shadow-border shadow-md flex flex-col p-4 my-4 rounded-lg text-black
        ${disabled ? "bg-gray-300" : `hover:scale-110 hover:bg-veransa-light transition-all transform-stroke duration-300 cursor-pointer ${colorEmpresa}`}
        ${selected ? "ring-2 ring-primary" : ""}
      `}
    >
      <img className="w-40 h-20 mx-auto" src={card.logo} alt="logo" />
      <p className="text-center text-2xl pt-2 font-extrabold text-link contorno">
        S/. {card.precio.toFixed(2)}
      </p>
      <div className="text-center text-xs mt-2 text-primary">
        {disabled ? "No disponible" : `Vigencia: ${card.inicio} → ${card.fin}`}
      </div>
      <p className="text-center font-semibold mt-4">{card.nombre}</p>
      <button className={`${disabled ? "bg-disabled text-black" : "border-1 border-veransa hover:bg-veransa-hover hover:cursor-pointer hover:text-veransa-light"} mt-6 rounded-md py-2`}>
        {disabled ? "No disponible" : "Elegir"}
      </button>
    </div>
  );
}
