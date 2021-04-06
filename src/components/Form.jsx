import React, { useState } from 'react'
const { v4: uuidv4 } = require('uuid');

export const Form = ({createNote}) => {

    //Crear state de Notas
    const [note, setNote] = useState({
        topic:'',
        urgency:'',
        date:'',
        textNote:'', 
    })

    //Creo un estado para controlar que se llenen todos los campos del formulario
    const [error, setError] = useState(false);

    //Función que se ejecuta cada vez
    //que el usuario escribe en un input
    const handleChange = (e)=>{
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }
    //Extraigo los valores de la nota
    const {topic, urgency, date, textNote} = note;

    //Cuando el usuario presiona agregar cita
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar
        if(topic.trim() ==='' || urgency.trim() ==='' || date.trim() ==='' || textNote.trim() ===''){
            setError(true);
            return;
        }
        //Si pasa, reasignamos el valor de error para que desaparezca el mensaje.
        setError(false);

        //Asignar ID
        note.id = uuidv4();
        
        //Persistir la note
        createNote(note);

        //Reiniciar Formulario
        setNote({
            topic:'',
            urgency:'',
            date:'',
            textNote:'', 
        })
    }

    return (
        <>
            <h2>Crear Nota</h2>

            { error ? 
                <p
                    data-cy="alerta-error"
                    className="alerta-error">Todos los campos son obligatorios</p>
                : null}
            <form
                onSubmit={handleSubmit}
            >
                <label>Tema</label>
                <input
                    type="text"
                    name="topic"
                    className="u-full-width"
                    placeholder="Tema de la nota"
                    onChange={ handleChange }
                    value={topic}
                    autoComplete="off"
                />
                <label>Nivel de Importancia</label>

                <select 
                    onChange={handleChange}
                    value={urgency}
                    name="urgency"
                >
                        <option value="">¿Es urgente?</option>
                        <option value="Con la calma">Con la calma</option>
                        <option value="Normal">Normal</option>
                        <option value="Prioritario">Prioritario</option>
                        <option value="VITAL">VITAL</option>
                </select>

                <label>Fecha de creación</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={date}
                />

                <label>Más información</label>
                <textarea
                    className="u-full-width"
                    name="textNote"
                    onChange={ handleChange }
                    value={textNote}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    data-cy="addNoteButton"
                >Agregar Nota</button>
            </form>
            
        </>
    )
}
