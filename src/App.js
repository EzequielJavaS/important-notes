import { useState } from 'react';
import {Form} from'./components/Form';
import { Note } from './components/Note';

const App=()=> {

  //Array de notas para guardar todas las notas
  const [notes, setNotes] = useState([])
  
  //Función que agrega la nueva nota a las ya existentes
  const createNote = note => {
    setNotes([
      ...notes,
      note
    ]);
  } 
  
  return (
    <>
      <h1 data-cy='title'>Revisar Lecturas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createNote={createNote}
            />
          </div>
          <div className="one-half column">
            <h2> Administrar notas</h2>
            {notes.map(note => (
              <Note
                key={note.id}
                note={note}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
