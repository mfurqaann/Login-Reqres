import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './UserDetail.css'

import axios from 'axios';
const UserDetail = () => {
    let location = useLocation();
    let id = location.state

    const [userDetail, setUserDetail] = useState();

    const getDataDetail = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`)
            setUserDetail(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDataDetail();
    }, [id])

    return (
        <div className='userDetail'>
            <div className='userDetail__title'>Detail User</div>
            <Card {...userDetail} />

        </div>
    )
}

export default UserDetail