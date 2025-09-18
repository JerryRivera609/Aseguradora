import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <div className="bg-background h-full flex rounded-md items-center">
      <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {item.to ? (
              <Link 
                to={item.to} 
                className="transition-all duration-300 hover:text-link-hover hover:underline flex items-center gap-1 "
              >
                {item.icon && item.icon}
                {item.label}
              </Link>
            ) : (
              <span className="flex items-center gap-1 text-link">
                {item.icon && item.icon}
                {item.label}
              </span>
            )}
            {index < items.length - 1 && <span>&gt;</span>}
          </span>
        ))}
      </span>
    </div>
  );
}