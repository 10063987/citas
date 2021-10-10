import React, { Fragment, useState } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'


const Formulario = ({crearCita}) => {

    // Crear state de citas
    /**
     * El state de cita por defecto sera un objeto vacio que contiene
     * todos los campos del formulario
     * 
     * actualizarCita nos permitira reescribir el state y
     * se usara cuando el usuario escriba en los campos
     */
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    /**
     * Se ejecuta cuando el evento onChange de cada input se emite
     */
    const actualizarState = (e) => {
        // console.log(e.target.value)
        // console.log(`${e.target.name} : ${e.target.value}`)
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores nuevos del state
    const {mascota, propietario, fecha, hora, sintomas} = cita

     const submitCita = (e) =>{ 
        e.preventDefault()        

        // Validar
        if(
            mascota.trim() === ''
            || propietario.trim() === ''
            || hora.trim() === ''
            || fecha.trim() === ''
            || sintomas.trim() === ''
        ){
            actualizarError(true)
            return
        }

        // Eliminar el mensaje previo
        actualizarError(false)

        // Asignar un ID
        cita.id = nanoid()

        // Crear la cita   -   Colocarla en el state principal
        crearCita(cita)

        // Reiniciar formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        
    } 

    

    return ( 
        <Fragment>
            <h2>Reservaciones</h2>

            { error ? <p className="alerta-error">Todos los campos sin obligatorios</p>  : null }

            <form 
                onSubmit={submitCita}
            >
                <label>Nombre</label>
                <input
                    type="text"
                    name="mascota" // 
                    className="u-full-width"
                    placeholder="A nombre de... "
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Apellido</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Señor/Señorita..."
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Peticiones adicionales</label>
                <textarea
                    type="text"
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Adornos para celebración y pastel con vela..."   
                    onChange={actualizarState}
                    value={sintomas}         
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Reservar</button>

            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;