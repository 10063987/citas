import React, { Fragment, useState } from 'react'

const Formulario = () => {

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

    /**
     * Se ejecuta cuando el evento onChange de cada input se emite
     */
    const actualizarState = (e) => {
        // console.log(e.target.value)
        console.log(`${e.target.name} : ${e.target.value}`)
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores nuevos del state
    const {mascota, propietario, fecha, hora, sintomas} = cita

     const submitCita = (e) =>{ 
        e.preventDefault() 

        console.log('Funciona')
        

        // Validar

        // Asignar un ID

        // Crear la cita   -   Colocarla en el state principal


        // Reiniciar form
        
    } 

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form 
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota" // 
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre de Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre de dueño"
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

                <label>Sintomas</label>
                <textarea
                    type="text"
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas..."   
                    onChange={actualizarState}
                    value={sintomas}         
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Agregar cita</button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;