import { useEffect, useState } from "react";
import TablaClientes from "./components/TableCli";
import { listarClientes } from "../../api/clientes";
import InputField from "../../components/InputField";
import Boton from "../../components/Button";
export default function GestorClientes() {

  const [clientes, setClientes] = useState([]);
  const [buscador,setBuscador] = useState("");

  useEffect(()=>{
    handleListarClientes();
  },[])

  const handleListarClientes = async (buscador) =>{
    try {
      const clientesres= await listarClientes(buscador);
      setClientes(clientesres);
    } catch (error) {
      console.error(error)
    }
  }

    return (
        <div className="h-[calc(100vh-5rem)] mx-auto w-full pt-6 font-inter">
          <h2 className="text-3xl font-bold mb-4">Gestión de Clientes</h2>
          <div className="flex gap-5 items-center  mb-5">
            <p className="text-sm  text-zinc-500">Edita y organiza los clientes registrados en el sistema.</p>
            <InputField value={buscador || ""} onChange={(e)=>setBuscador(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleListarClientes(buscador);
              }
            }}/>
            <Boton onClick={()=>{
              handleListarClientes(buscador)
            }} text="Buscar"/>
          </div>

          <TablaClientes clientes={clientes}/>
        </div>
    );
}
