import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'


const CrudUpdate = () => {
    const [userData, setUserData] = useState([])
    const [firstName, setfirstName] = useState();
    const [lastName, setlastname] = useState();
    const [Phone, setphone] = useState();
    const [Age, setAge] = useState();
    const [selectUser, setselectUser] = useState();
    const [TableData, setTableData] = useState([])

    const { id } = useParams()
    const Navigate = useNavigate()

    useEffect(() => {
        getUserData()
    }, [])
    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            Phone: Phone,
            Age: Age,
            selectUser: selectUser
        }
        axios.put(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${id}`, data)
            .then(res => {
                console.log(res);
                tableList();
                setfirstName('')
                setlastname('')
                setphone('')
                setAge('')
                setselectUser('')
                Navigate('/crud')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        tableList();
    }, [])
    const tableList = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${id}`)
            .then(res => {
                console.log(res.data, "???")
                setfirstName(res.data.firstName)
                setlastname(res.data.lastName)
                setphone(res.data.Phone)
                setAge(res.data.Age)
                setselectUser(res.data.selectUser)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="">First Name:</label>
                            <input type="text" className='form-control' value={firstName} onChange={(e) => setfirstName(e.target.value)} required /><br />
                            <label htmlFor="">Last Name:</label>
                            <input type="text" className='form-control' value={lastName} onChange={(e) => setlastname(e.target.value)} required /><br />
                            <label htmlFor="">Phone:</label>
                            <input type="text" className='form-control' value={Phone} onChange={(e) => setphone(e.target.value)} required /><br />
                            <label htmlFor="">Age:</label>
                            <input type="text" className='form-control' value={Age} onChange={(e) => setAge(e.target.value)} required /><br />
                            <label htmlFor="">Select User</label>
                            <select className="form-select" aria-label="Default select example" value={selectUser} onChange={(e) => setselectUser(e.target.value)} required>
                                <option selected>Open this select menu</option>
                                {
                                    userData.map((userData, index) => {
                                        return (
                                            <option key={index}>{userData.name}</option>
                                        )
                                    })
                                }
                            </select><br />
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrudUpdate