import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const CrudView = () => {
    const [viData, setviData] = useState()
    let { id } = useParams();
    useEffect(() => {
        getViewData()
    }, [])
    const getViewData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${id}`)
            .then(res => {
                console.log(res.data)
                setviData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            {
                viData ? (
                    <div>
                        <h6>First Name: {viData.firstName}</h6>
                        <h6>Last Name: {viData.lastName}</h6>
                        <h6>Phone: {viData.Phone}</h6>
                        <h6>Age: {viData.Age}</h6>
                        <h6>User List: {viData.selectUser}</h6>
                    </div>
                ) :
                    (
                        <div>Loaing</div>
                    )}

        </>
    )
}

export default CrudView