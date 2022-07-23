import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    let navigate = useNavigate();

    const getDetail = async () => {
        let id = props.id
        navigate(`/users/${id}`, { state: id })
    }

    return (
        <div className="card" key={props.id} onClick={getDetail} >
            <div className="card__item">
                {props.avatar ? <div className="card__header">
                    <img src={props.avatar} alt="avatar" />
                </div> : ''}

                <div className="card__name">
                    <h3>
                        {props.first_name} {props.last_name}
                    </h3>
                </div>
                <div className="card__name">
                    <h5>
                        {props.email ? props.email : ''}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Card