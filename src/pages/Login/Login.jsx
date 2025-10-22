import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineLockPerson } from "react-icons/md";
import { useAuth } from "./AuthContext";

import Logo from "/slonga.svg"

import "./login.css"
import { useState } from "react";
import Boton from "../../components/Button";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false);

    const { login } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await login(email, password, remember);
            console.log(response)
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Error al iniciar sesion. Revise sus datos');
            }

            console.log(err)
        }
    };
    return (
        <>
            <div className="h-screen">
                <div className="h-full inset-0 flex justify-center items-center bg-[url('/pexels-stywo-1261728.jpg')] bg-cover bg-no-repeat bg-center text-foreground flex-col">
                    <div className="flex flex-col bg-container/80 backdrop-blur-md rounded-[40px] py-12 px-10 shadow-2xl w-[380px] md:w-[420px]">

                        <div className="flex flex-col items-center gap-4 mb-6">
                            {/* <img src={Logo} width={250} alt="" /> */}
                            <h1 className="text-3xl font-bold text-primary tracking-wide">Asegurado</h1>
                            <p className="text-sm text-foreground-muted">Ingrese sus credenciales para continuar</p>
                        </div>

                        <div className="p-2 rounded-2xl flex flex-col gap-6">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Email */}
                                <div className="relative text-foreground">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MdOutlineMailLock className="text-xl text-primary" />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 border-b border-foreground-muted p-2 text-md w-full text-foreground-muted
                focus:outline-none
                focus:text-foreground
                transition-all duration-500
                bg-transparent
                focus:border-primary
                relative
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-1/2
                after:w-0
                after:h-[2px]
                after:bg-primary
                after:transition-all after:duration-500
                focus:after:left-0
                focus:after:w-full"
                                    />
                                </div>

                                {/* Password */}
                                <div className="relative text-foreground">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MdOutlineLockPerson className="text-xl text-primary" />
                                    </span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Contraseña"
                                        className="pl-10 border-b border-foreground-muted p-2 text-md w-full text-foreground-muted
                focus:outline-none
                focus:text-foreground
                transition-all duration-500
                bg-transparent
                focus:border-primary
                relative
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-1/2
                after:w-0
                after:h-[2px]
                after:bg-primary
                after:transition-all after:duration-500
                focus:after:left-0
                focus:after:w-full"
                                    />
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center gap-2 px-2 text-foreground">
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" checked={remember} onChange={() => setRemember(!remember)} />
                                        <span className="text-sm">Recuérdame</span>
                                    </label>
                                </div>

                                {/* Error */}
                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                {/* Button */}
                                <div className="grid place-items-center">
                                    <Boton
                                        type="submit"
                                        text="Ingresar"
                                        className="bg-primary px-6 py-2 text-white rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;
