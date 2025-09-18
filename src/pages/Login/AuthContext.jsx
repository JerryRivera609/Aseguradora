import { useEffect, useState, createContext, useContext } from "react";
import authService from "../../api/auth";
import LogoSolo from "../../assets/LogoSolo";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const initAuth = async () => {
            const storedUser = authService.getCurrentUser();
            const token = authService.getToken();

            if (storedUser && token) {
                setUser(storedUser);
                setIsAuthenticated(true);
                console.log('AuthContext login - isAuthenticated:', true);
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email, password,remember) => {
        setLoading(true);
        try {
            // const response = await authService.login(email, password, remember);
            // const { jwtToken, id, nombre, apellido_paterno, apellido_materno, oficina, puntoDeVenta, expiraEnSegundos, roles } = response;

            const userData = {
                token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsZWFkb0BnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xfQURNSU5JU1RSQVRJVk9fQ0xJRU5URVMiLCJST0xfQURNSU5JU1RSQVRJVk9fRU1QTEVBRE9TIiwiUk9MX0FETUlOSVNUUkFUSVZPX0dSQUZJQ09TIiwiUk9MX0FETUlOSVNUUkFUSVZPX1BVTlRPVkVOVEEiLCJST0xfT1BFUkFDSU9ORVNfQUNUVUFMSVpBUl9DU1YiLCJST0xfT1BFUkFDSU9ORVNfR1JBRklDT1MiLCJST0xfT1BFUkFDSU9ORVNfTElTVEFTIiwiUk9MX09QRVJBQ0lPTkVTX1BMQU5JTExBUyIsIlJPTF9PUEVSQUNJT05FU19TSU5JRVNUUk9TIiwiUk9MX09QRVJBQ0lPTkVTX1ZFTkNJTUlFTlRPUyIsIlJPTF9PUEVSQUNJT05FU19WRVJJRklDQVJfQ1NWIiwiUk9MX1ZFTlRBU19HRU5FUkFSIiwiUk9MX1ZFTlRBU19HUkFGSUNPUyIsIlJPTF9WRU5UQVNfTElTVEFTIl0sImlhdCI6MTc1ODE3MDYwMywiZXhwIjoxNzU4MTk5NDAzfQ.yHr7_5DOEhmEd3lVew8hXqEWQGHcQqpIwDQYzGQ3Ggc",
                id:2,
                nombre:"APELLIDO2",
                apellido_paterno:"APELLIDO2",
                apellido_materno:"APELLIDO2",
                oficina:"LIMA-SUIR",
                puntoDeVenta:[
                    {id: 2, nombrePDV: "Tienda Central"}
                    ,{id: 3, nombrePDV: "Tienda Central"}
                    ,{id: 4, nombrePDV: "Botica Luis"}
                ],
                // expiraEnSegundos,
                roles:["ROL_ADMINISTRATIVO_CLIENTES"
                    ,"ROL_ADMINISTRATIVO_EMPLEADOS"
                    ,"ROL_ADMINISTRATIVO_GRAFICOS"
                    ,"ROL_ADMINISTRATIVO_PUNTOVENTA"
                    ,"ROL_OPERACIONES_ACTUALIZAR_CSV"
                    ,"ROL_OPERACIONES_GRAFICOS"
                    ,"ROL_OPERACIONES_LISTAS"
                    ,"ROL_OPERACIONES_PLANILLAS"
                    ,"ROL_OPERACIONES_SINIESTROS"
                    ,"ROL_OPERACIONES_VENCIMIENTOS"
                    ,"ROL_OPERACIONES_VERIFICAR_CSV"
                    ,"ROL_VENTAS_GENERAR"
                    ,"ROL_VENTAS_GRAFICOS"
                    ,"ROL_VENTAS_LISTAS"],
            }

            setUser(userData);
            console.log(userData)
            setIsAuthenticated(true);
            setLoading(false);



            return userData;

        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            authService.logout();
            setLoading(false);
            throw error;
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        isAuthenticated,
        loading,
        login,
        logout,
    };

    if (loading) {
        return (
            <>
                <div className="fixed w-full h-full flex justify-center items-center">
                    {/* capa de fondo con blur */}
                    <div className="absolute inset-0 bg-[url(/pexels-stywo-1261728.jpg)] bg-cover blur-sm"></div>

                    {/* contenido sin blur */}
                    <div className="relative w-40 text-primary">
                        <LogoSolo />
                    </div>
                </div>
            </>
        )
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};