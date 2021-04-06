import React from 'react'

export const Note = ({note}) => {
    const {topic, urgency, date, textNote, id} = note
    return (
        <div className="cita">
            <p>Tema: <span>{topic}</span></p>
            <p>Urgencia: <span>{urgency}</span></p>
            <p>Creación: <span>{date}</span></p>
            <p>Información: <span>{textNote}</span></p>
        </div>
    )
}
