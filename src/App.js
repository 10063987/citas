import React, { Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  // Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)

  // useEffect para realizar operaciones "secundarias"
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])



  // Guardar cita nueva con las actuales
  const crearCita = cita =>{
    guardarCitas([ ...citas, cita ])
  }

  // Eliminar cita por id 
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter( cita => cita.id !== id )
    guardarCitas(nuevasCitas)
  }

  const titulo = citas.length >= 1 ? <h2>Agrega una nueva cita</h2> : <h2>No hay citas</h2> 

  return (
    <Fragment>
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita = {crearCita}
              />
            </div>
            <div className="one-half column">
              {titulo}
              {citas.map(cita => (
                <Cita 
                  key = {cita.id}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
