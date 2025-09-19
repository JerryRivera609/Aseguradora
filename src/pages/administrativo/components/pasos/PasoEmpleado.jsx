import { useState } from "react";
import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectField";
import UbigeoSelects from "../UbigeoSelect";
import StepButtons from "../../../../components/StepButtons";

const defaultForm = () => ({
  tipo_documento: "",
  numero_documento: "",
  nombres: "",
  apellido_paterno: "",
  apellido_materno: "",
  numero_celular: "",
  correo: "",
  departamento: "",
  provincia: "",
  distrito: "",
  id_oficina: "",
});

export default function EmpleadoGenerar({
  initial,
  onCancel,
  onSubmit,
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initial || defaultForm());

  const next = async () => {
    if (step < 2) {
      if (!form.tipo_documento || !form.numero_documento || !form.nombres) {
        alert("Completa tipo de documento, número y nombres.");
        return;
      }
      setStep(2);
      return;
    }
    await onSubmit?.(form);
  };

  const prev = () => {
    if (step === 1) onCancel?.();
    else setStep(1);
  };

  const apellidosDisabled = form.tipo_documento === "RUC";
  const onUbigeo = (nextVal) =>
    setForm(prev => ({ ...prev,
      departamento: nextVal.departamento,
      provincia: nextVal.provincia,
      distrito: nextVal.distrito,
    }));

  return (
    <div className="space-y-4">
      {/* Paso 1 */}
      {step === 1 && (
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Datos personales</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label="Tipo de Documento"
              value={form.tipo_documento}
              onChange={e => setForm(f => ({ ...f, tipo_documento: e.target.value }))}
              options={[
                { label: "DNI", value: "DNI" },
                { label: "RUC", value: "RUC" },
                { label: "CE", value: "CE" },
              ]}
            />
            <InputField
              label="Nro. documento"
              value={form.numero_documento}
              onChange={e => setForm(f => ({ ...f, numero_documento: e.target.value }))}
            />
            <InputField
              label="Nombres"
              value={form.nombres}
              onChange={e => setForm(f => ({ ...f, nombres: e.target.value }))}
            />
            <InputField
              label="Apellido paterno"
              disabled={apellidosDisabled}
              value={form.apellido_paterno}
              onChange={e => setForm(f => ({ ...f, apellido_paterno: e.target.value }))}
            />
            <InputField
              label="Apellido materno"
              disabled={apellidosDisabled}
              value={form.apellido_materno}
              onChange={e => setForm(f => ({ ...f, apellido_materno: e.target.value }))}
            />
            <InputField
              label="Teléfono"
              value={form.numero_celular}
              onChange={e => setForm(f => ({ ...f, numero_celular: e.target.value }))}
            />
            <InputField
              label="Correo"
              value={form.correo}
              onChange={e => setForm(f => ({ ...f, correo: e.target.value }))}
            />
            <InputField
              label="Contraseña"
              type="password"
              value={form.contrasena}
              onChange={e => setForm(f => ({ ...f, contrasena: e.target.value }))}
            />
          </div>

          <div className="mt-2">
            <UbigeoSelects
              label="Ubigeo"
              value={{
                departamento: form.departamento || "",
                provincia: form.provincia || "",
                distrito: form.distrito || "",
              }}
              onChange={onUbigeo}
            />
          </div>
        </section>
      )}

      {/* Paso 2 */}
      {step === 2 && (
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Organización</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label="Oficina"
              value={form.id_oficina}
              onChange={e => setForm(f => ({ ...f, id_oficina: e.target.value }))}
              options={[
                { label: "Lima", value: "1" },
                { label: "Ica", value: "2" },
                { label: "Satipo", value: "3" },
              ]}
            />
          </div>
        </section>
      )}

      {/* Re-uso de tus StepButtons */}
      <StepButtons
        onPrevious={prev}
        onNext={next}
        isFirstStep={step === 1}
        isLastStep={step === 2}
        nextText="Continuar"
      />
    </div>
  );
}
