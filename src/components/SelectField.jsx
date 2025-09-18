export default function SelectField({ 
  label, 
  options, 
  value, 
  onChange, 
  name, 
  placeholder = "",
  // className = "",
  disabled,
  required,
  errorMsg
}) {
  const error = required && !value ? errorMsg || "Campo requerido" : "";

  return (
    <div className={`relative`}>
      <select
        className={`peer w-full pt-5 appearance-none bg-transparent border-0 border-b-2 text-foreground 
          focus:outline-none focus:text-foreground ${disabled ? "bg-disabled" : ""} 
          ${error ? "border-b-error" : "border-border"}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled || options.length<1}
        required={required}
      >
        <option value="" >
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>


      {label && (
        <label 
          htmlFor={name} 
          className={`
            absolute left-0 top-2 text-foreground text-base transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-foreground peer-placeholder-shown:text-base
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary
            ${value ? "top-[0] text-sm text-primary" : ""}
          `}
        >
          {label}
        </label>
      )}
      {error && (
        <div className="absolute left-0 mt-1 w-max max-w-[200px] bg-error text-container text-xs rounded-md px-2 py-1 shadow-lg animate-fadeIn">
          {error}
          <div className="absolute -top-1 left-3 w-2 h-2 bg-error rotate-45"></div>
        </div>
      )}
    </div>
  );
}
