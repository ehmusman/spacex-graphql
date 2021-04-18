import React from 'react'
import { Link } from "react-router-dom"
const Launch = ({ id, date, success, name, img, detail }) => {
    const height = {
        width: "100%",
        height: "15vw",
        objectFit: "cover"
    }
    return (
        <>
            <div className="card bg-dark text-light border">
                <img style={height} className="card-img-top img-fluid" src={img} alt="" />
                <div className="card-body">
                    <h4 className={`card-title ${success ? "text-success" : "text-danger"}`}>{name}</h4>
                    <span>Date: {date}</span>
                    <p className="card-text text-truncate">{detail}</p>
                    <Link to={`/launch/${id}`} className="btn btn-dark border">Detail</Link>
                </div>
            </div>
        </>
    )
}

export default Launch
