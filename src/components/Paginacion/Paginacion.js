import React from 'react';
import "./Paginacion.scss";

const Paginacion = ({patientsPerPage, totalPatients, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPatients /patientsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <ul className="paginacion">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href="!#" onClick={()=> paginate(number)}className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    )
};

export default Paginacion;