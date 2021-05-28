import React, {useState, useEffect} from 'react'
import TarjetaPaciente from "../TarjetaPaciente"
import Paginacion from '../Paginacion';
import "./Tabla.scss"

function Tabla () {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [patientsPerPage] = useState(5);

    useEffect(()=> {
        setLoading(true)
        const fetchJSON = async () => {
            const response = await fetch("http://localhost:8000/pacientes");
            let json = await response.json();
            setPatients(json);
            setLoading(false)
          };
        fetchJSON();
    }, []) 


    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if(loading) return(
        <div>Cargando...</div>
    )
    return(
        <div className="tabla">
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Nombre y apellidos</th>
                        <th>Clínica</th>
                        <th>Objetivo Tratamiento</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>    
                </thead>
                <tbody>
                    {
                        currentPatients.map((paciente) => {
                            const [id] = Object.keys(paciente);
                            console.log(id)
                            return(
                                <TarjetaPaciente 
                                id={id} 
                                nombre={paciente.[id].datos_paciente.nombre}
                                apellidos={paciente.[id].datos_paciente.apellidos}
                                fecha={paciente.[id].datos_paciente.fecha_nacimiento}
                                clinica={paciente.[id].ficha_dental.clinica}
                                objetivo={paciente.[id].ficha_dental.objetivo_tratamiento}
                                estado={paciente.[id].ficha_dental.estado}
                                />
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <Paginacion 
            patientsPerPage={patientsPerPage}
            totalPatients={patients.length}
            paginate={paginate}
            />
        </div>
    )
}

export default Tabla