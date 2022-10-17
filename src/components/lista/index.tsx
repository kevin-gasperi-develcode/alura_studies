import React from "react";
import Item from "./item";
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [
        {
            tarefa: 'react',
            tempo: '02:00:00'
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item} />
                ))}
            </ul>
        </aside>
    )
}
export default Lista;