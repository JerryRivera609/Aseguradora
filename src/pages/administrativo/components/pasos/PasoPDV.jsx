import { useState } from "react";
import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectField";
import UbigeoSelects from "../UbigeoSelect";
import StepButtons from "../../../../components/StepButtons";

const defaultForm = () => ({
  nombre_colaborador: "",
  apellido_paterno: "",
  apellido_materno: "",
  telefono_colaborador: "",
  contrasena: "",
  email_colaborador: "",
  departamento_colaborador: "",
  provincia_colaborador: "",
  distrito_colaborador: "",
  direccion_colaborador: "",
  tipo_documento: "",
  numero_documento: "",
  id_empleado: "",
  contrato: "",
  departamento_pdv: "",
  provincia_pdv: "",
  distrito_pdv: "",
  direccion_pdv: "",
  tefelono1_pdv: "",
  tefelono2_pdv: "",
  formaPago: "",
  foto_fachada: "",
  foto_dni: "",
  nombre_pdv: "",
  razon_social: "",
  ruc: "",
});

export default function PDVGenerar({ initial = null, onCancel, onSubmit }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initial || defaultForm());

  const next = async () => {
    if (step === 1) {
      if (!form.tipo_documento || !form.numero_documento || !form.nombre_colaborador) {
        alert("Completa tipo doc, nro doc y nombre del colaborador.");
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

  const onUbigeoColaborador = (next) =>
    setForm(prev => ({
      ...prev,
      departamento_colaborador: next.departamento,
      provincia_colaborador: next.provincia,
      distrito_colaborador: next.distrito,
    }));

  const onUbigeoPDV = (next) =>
    setForm(prev => ({
      ...prev,
      departamento_pdv: next.departamento,
      provincia_pdv: next.provincia,
      distrito_pdv: next.distrito,
    }));

  const apellidosDisabled = form.tipo_documento === "RUC";

  return (
    <div className="space-y-4">
      {/* Paso 1: Colaborador */}
      {step === 1 && (
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Datos del colaborador</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label="Tipo Doc"
              value={form.tipo_documento}
              onChange={e => setForm(f => ({ ...f, tipo_documento: e.target.value }))}
              options={[
                { label: "DNI", value: "DNI" },
                { label: "RUC", value: "RUC" },
                { label: "CE", value: "CE" },
              ]}
            />
            <InputField label="Nro Doc" value={form.numero_documento} onChange={e => setForm(f => ({ ...f, numero_documento: e.target.value }))} />
            <InputField label="Nombre" value={form.nombre_colaborador} onChange={e => setForm(f => ({ ...f, nombre_colaborador: e.target.value }))} />
            <InputField label="Apellido P." disabled={apellidosDisabled} value={form.apellido_paterno} onChange={e => setForm(f => ({ ...f, apellido_paterno: e.target.value }))} />
            <InputField label="Apellido M." disabled={apellidosDisabled} value={form.apellido_materno} onChange={e => setForm(f => ({ ...f, apellido_materno: e.target.value }))} />
            <InputField label="Teléfono" value={form.telefono_colaborador} onChange={e => setForm(f => ({ ...f, telefono_colaborador: e.target.value }))} />
            <InputField label="Correo" value={form.email_colaborador} onChange={e => setForm(f => ({ ...f, email_colaborador: e.target.value }))} />
            <InputField label="Dirección" value={form.direccion_colaborador} onChange={e => setForm(f => ({ ...f, direccion_colaborador: e.target.value }))} />
            <SelectField
              label="Supervisor"
              value={form.id_empleado}
              onChange={e => setForm(f => ({ ...f, id_empleado: e.target.value }))}
              options={[
                { label: "Super1", value: "5" },
                { label: "Super2", value: "6" },
                { label: "Super3", value: "7" },
              ]}
            />
          </div>

          <div className="mt-2">
            <UbigeoSelects
              label="Ubigeo del colaborador"
              value={{
                departamento: form.departamento_colaborador || "",
                provincia: form.provincia_colaborador || "",
                distrito: form.distrito_colaborador || "",
              }}
              onChange={onUbigeoColaborador}
            />
          </div>
        </section>
      )}

      {/* Paso 2: Punto de venta */}
      {step === 2 && (
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Datos del punto de venta</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="Nombre PDV" value={form.nombre_pdv} onChange={e => setForm(f => ({ ...f, nombre_pdv: e.target.value }))} />
            <InputField label="RUC" value={form.ruc} onChange={e => setForm(f => ({ ...f, ruc: e.target.value }))} />
            <InputField label="Razón social" value={form.razon_social} onChange={e => setForm(f => ({ ...f, razon_social: e.target.value }))} />
            <InputField label="Teléfono auxiliar" value={form.telefono1_pdv} onChange={e => setForm(f => ({ ...f, telefono1_pdv: e.target.value }))} />
            <InputField label="Teléfono auxiliar 2" value={form.telefono2_pdv} onChange={e => setForm(f => ({ ...f, telefono2_pdv: e.target.value }))} />
            <InputField label="Contrato" value={form.contrato} onChange={e => setForm(f => ({ ...f, contrato: e.target.value }))} />
            <InputField label="Foto Fachada" value={form.foto_fachada} onChange={e => setForm(f => ({ ...f, foto_fachada: e.target.value }))} />
            <InputField label="Foto Documento" value={form.foto_dni} onChange={e => setForm(f => ({ ...f, foto_dni: e.target.value }))} />
            <InputField label="Dirección PDV" value={form.direccion_pdv} onChange={e => setForm(f => ({ ...f, direccion_pdv: e.target.value }))} />
            <InputField label="Contraseña" type="password" value={form.contrasena} onChange={e => setForm(f => ({ ...f, contrasena: e.target.value }))} />
          </div>

          <div className="mt-2">
            <UbigeoSelects
              label="Ubigeo del punto de venta"
              value={{
                departamento: form.departamento_pdv || "",
                provincia: form.provincia_pdv || "",
                distrito: form.distrito_pdv || "",
              }}
              onChange={onUbigeoPDV}
            />
          </div>
        </section>
      )}

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
