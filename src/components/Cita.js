import React, {useEffect}  from 'react';
import PropTypes from 'prop-types'

const Cita = ({ cita, eliminarCita }) => {

    useEffect(() => {
        // console.log('useEffect de componente "Cita"')

        return () => {
            console.log('Cita Desmontada')
        }
    }) 

    return(

        <div className="cita">
            <p>A nombre de:  <span>{cita.mascota}</span>  <span>{cita.propietario}</span></p>
            <p>Fecha:  <span>{cita.fecha}</span> </p>
            <p>Hora:  <span>{cita.hora}</span> </p>
            <p>Peticiones adicionales:  <span>{cita.sintomas}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick = { () => eliminarCita(cita.id) }
            >Eliminar &times;</button>
        </div>
    )
 };

 Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

 
export default Cita;