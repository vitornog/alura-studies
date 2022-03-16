import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import style from './formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas} : Props){

    const [tarefa,setTarefa] = useState("");
    const [tempo,setTempo] = useState("00:00");

    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, { tarefa,tempo, selecionado: false, completado: false, id: uuidv4() }]);
        setTarefa("");
        setTempo("00:00");
    }
    
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicione um novo estudo:
            </label>
            <input
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que deseja estudar?"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                required
            />

        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input
                type="time"
                name="tempo"
                id="tempo"
                step="1"
                value={tempo}
                onChange={evento => setTempo(evento.target.value)}
                min="00:00:00"
                max="01:30:00"
            />
        </div>
        <Botao type="submit">
            Adicionar
        </Botao>
    </form>
    )
}

export default Formulario;