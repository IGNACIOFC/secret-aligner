import React from 'react'
import "./TarjetaPaciente.scss"

function TarjetaPaciente ({id, nombre, fecha, clinica, objetivo, estado}) {
    return(
        <tr id={id} className="tarjeta">
            <td>
                <p>{nombre}</p>
                <p>{fecha}</p>
            </td>
            <td>{clinica}</td>
            <td>{objetivo}</td>
            <td>
                <button className="estado">{estado}</button>
            </td>
            <td>
                <select name="acciones" className="acciones">
                    <option value="Acciones">Acciones</option>
                    <option value="Editar">Editar</option>
                    <option value="Finalizar">Finalizar</option>
                    <option value="Borrar">Borrar</option>
                </select>
            </td>
        </tr>
    )
}

export default TarjetaPaciente

