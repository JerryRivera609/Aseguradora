// src/pages/pdv/components/FormPdv.jsx
import FormModal from "./FormModal";
import PDVGenerar from "./pasos/PasoPDV";

export default function FormPdv({ open, title = "Punto de venta (2 pasos)", initial = null, onClose, onSubmit }) {
  return (
    <FormModal open={open} title={title} onClose={onClose}>
      <PDVGenerar
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
