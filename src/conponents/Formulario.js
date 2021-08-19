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
        console.log(e.target.name)
    }



    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota" // 
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                />

                <label>Nombre de Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre de dueño"
                    onChange={actualizarState}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>Sintomas</label>
                <textArea
                    type="text"
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas..."   
                    onChange={actualizarState}             
                ></textArea>

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