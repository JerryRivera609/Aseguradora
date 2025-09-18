import LogoSolo from "../assets/LogoSolo";

export default function Loading(){
    return(
        <>
            <div className="fixed w-full left-0 top-0 z-20 h-full flex justify-center items-center">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.36)] backdrop-blur-xs"></div>
            <div className="relative w-40">
                <LogoSolo className="animate-draw"/>
            </div>
            </div>
        </>
    )
}