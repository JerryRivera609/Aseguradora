import FormModal from "./FormModal";
import EmpleadoGenerar from "./pasos/PasoEmpleado";

export default function FormEmpleado({
  open,
  title = "Empleado (2 pasos)",
  initial = null,
  onClose,
  onSubmit,
}) {
  return (
    <FormModal open={open} title={title} onClose={onClose}>
      <EmpleadoGenerar
        initial={initial}
        onCancel={onClose}
        onSubmit={async (form) => {
          await onSubmit?.(form);
          onClose?.();
        }}
      />
    </FormModal>
  );
}
