import Botao from "../botao";
import Relogio from "./relógio";
import style from "./Cronometro.module.scss"

export function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao
                texto='Começar'
            />
        </div>
    )
}