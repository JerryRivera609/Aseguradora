export default function FormGrid({ children, className = "" }) {
  return (
    <div className={`grid grid-rows-[repeat(auto-fill,3rem)] grid-cols-1 md:grid-cols-4 p-5 mt-4 gap-12 w-full border-b border-border ${className}`}>
      {children}
    </div>
  );
}