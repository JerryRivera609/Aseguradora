import { useRef, useState } from "react";

export default function InputField({ 
  label, 
  type = "text", 
  value, 
  onChange,
  onKeyDown,
  name,
  className = "" ,
  required,
  disabled,
  minLength,
  maxLength,
  minValue,
  maxValue,
  regex,
  errorMsg
}) {
  const [touched, setTouched] = useState(false);
  
  const validate = () => {
    if (!value) return ""; // vacío no muestra error
    if (value.length < minLength) return `Debe tener al menos ${minLength} caracteres`;
    if (value.length > maxLength) return `No debe superar ${maxLength} caracteres`;
    if (regex && !regex.test(value)) return errorMsg;
    if (type === "number") {
      const num = parseInt(value, 10);
      if (minValue && num < minValue) return `Debe ser mayor o igual a ${minValue}`;
      if (maxValue && num > maxValue) return `Debe ser menor o igual a ${maxValue}`;
    }
    return "";
  };
  
  const isDate = type === "date";
  const error = touched ? validate() : "";
  
  const inputRef = useRef(null);
  const handleClick = () => {
  if (type === "date" && inputRef.current) {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker(); // Chrome
    } else {
      inputRef.current.focus(); // Safari y otros
    }
  }
};
  return (
    <div className="relative">
      <input
        ref={inputRef}
        className={`peer 
          w-full text-foreground border-b-border border-b-2 border-0 bg-transparent focus:outline-none focus:text-foreground 
          ${className ? "" : "pt-5"}
          ${disabled ? "bg-disabled" : ""}
          ${error ? "border-b-error" : "border-border"}
          ${isDate ? "no-native-placeholder hide-calendar" : ""}
        `}
        type={type}
        placeholder={isDate ? undefined : " "}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={() => setTouched(true)}
        onFocus={handleClick}
        name={name}
        id={name}
        required={required}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
      />
      {label && (
        <label 
          htmlFor={name} 
          className={`
            pointer-events-none
            absolute left-0 top-2 text-foreground text-base transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-foreground peer-placeholder-shown:text-base
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-foreground-muted
            ${value ? "top-[0] text-sm text-primary" : ""}
          `}
        >
          {label}
        </label>
      )}

      <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-primary transition-transform duration-300 origin-center peer-focus:scale-x-100"></span>

      {error && (
        <div className="absolute left-0 mt-1 w-max max-w-[200px] bg-error text-container text-xs rounded-md px-2 py-1 shadow-lg animate-fadeIn">
          {error}
          <div className="absolute -top-1 left-3 w-2 h-2 bg-error rotate-45"></div>
        </div>
      )}
    </div>
  );
}
