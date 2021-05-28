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
                        <div className="form-field">
                            <h4>Recorte Alineadores</h4>
                            <div className="form-field-checkbox">
                            <label>Recortar dejando 1-3 mm de encía</label>
                            <input type="checkbox"></input>
                            </div>
                            <div className="form-field-checkbox">
                            <label>Recortar a nivel de los cuellos</label>
                            <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="form-field">
                            <h4>¿Secret Retainer?</h4>
                            <div className="form-field-checkbox">
                            <label>Sí</label>
                            <input type="checkbox"></input>
                            </div>
                            <div className="form-field-checkbox">
                            <label>No</label>
                            <input type="checkbox"></input>
                            </div>
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