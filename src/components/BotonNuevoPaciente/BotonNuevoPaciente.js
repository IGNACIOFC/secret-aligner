import React, {useState, useEffect, useRef} from 'react'
import "./BotonNuevoPaciente.scss"

function BotonNuevoPaciente () {
    const outside = useRef()
    const [isOpen, setIsOpen] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset()
      }
    return(
        <>
            <div className="button-container" ref={outside}>
                <button onClick={() => setIsOpen(!isOpen)} className="button">+ Nuevo Paciente</button>
            </div>
            {isOpen ? (
                <div className="modal">
                    <h3>Nuevo Paciente</h3>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="form-field">
                        <label>Nombre: </label>
                        <input type="text"></input>
                        </div>
                        <div className="form-field">
                        <label> Apellidos: </label>
                        <input type="text"></input>
                        </div>
                        <div className="form-field">
                        <label> Fecha de Nacimiento: </label>
                        <input type="date"></input>
                        </div>
                        <div className="form-field">
                        <label>Sexo:</label>
                        <select>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                        </div>
                        <div className="form-field">
                        <label> Clínica: </label>
                        <input type="text"></input>
                        </div>
                        <div className="form-buttons">
                            <button className="boton-guardar">Guardar</button>
                            <button onClick={() => setIsOpen(!isOpen)} className="boton-cancelar">Cancelar</button>
                            <button type="submit" className="boton-limpiar">Limpiar</button>
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    )
}

export default BotonNuevoPaciente