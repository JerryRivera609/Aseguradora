
export default function SearchSection({ titulo, children }) {
  return (
    <div className="flex w-full justify-between space-x-5 border-b items-center border-border bg-primary-light rounded-xl md:space-x-10 md:px-10">
      {titulo && <h2 className="text-lg">{titulo}</h2>}
      {children}
    </div>
  );
}
