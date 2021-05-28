import React from 'react'
import SearchBar from "../../components/SearchBar"
import {AiOutlineIdcard} from "react-icons/ai"
import BotonNuevoPaciente from "../../components/BotonNuevoPaciente"
import BotonDescargar from "../../components/BotonDescargar"
import Tabla from "../../components/Tabla"
import "./Pacientes.scss"

function Pacientes () {
    
    return (
        <div className="pacientes-container">
            <div className="pacientes">
                <div className="pacientes-header">
                    <div className="pacientes-header-info">
                        <div className="pacientes-header-icon">
                            <AiOutlineIdcard />
                        </div>
                        <div className="pacientes-header-title">
                            <h2>Listado de Pacientes</h2>
                            <p>Visualización de pacientes</p>
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div className="botones">
                    <BotonNuevoPaciente />
                    <BotonDescargar />
                </div>
                <Tabla />
            </div>
        </div>
    )
    
}

export default Pacientes