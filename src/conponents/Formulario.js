import React, { Fragment } from 'react'

const Formulario = () => {
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
                />

                <label>Nombre de Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre de dueño"
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                />

                <label>Sintomas</label>
                <textArea
                    type="text"
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas..."                
                ></textArea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;