import Link from "next/link";
import Style from "../styles/Navegador.module.css"


export default function Navegador(props){
    return (
        <Link href={props.destino}>
            <div className={Style.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'}}>
            {props.texto}
            </div>
        </Link>
    )
}