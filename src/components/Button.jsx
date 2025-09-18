export default function Boton({ text, onClick, type, className}) {
    return (
        <button type={type} onClick={onClick} className={`${className ? className : "bg-primary text-foreground px-4 py-2 rounded-2xl hover:bg-primary-hover"}  transition hover:cursor-pointer`}>
            {text}
        </button>
    );
}
