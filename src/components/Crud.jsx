import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Crud = () => {
    const [userData, setUserData] = useState([])
    const [firstName, setfirstName] = useState();
    const [lastName, setlastname] = useState();
    const [Phone, setphone] = useState();
    const [Age, setAge] = useState();
    const [selectUser, setselectUser] = useState();
    const [TableData, setTableData] = useState([])
    const [filterData, setFilterData] = useState('')
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
        axios.post(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/`, data)
            .then(res => {
                console.log(res);
                tableList();
                setfirstName('')
                setlastname('')
                setphone('')
                setAge('')
                setselectUser('')
                toast.success("Added")

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        tableList();
    }, [])
    const tableList = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/`)
            .then(res => {
                console.log(res.data, "???")
                setTableData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleDelete = (id) => {
        axios.delete(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${id}`)
            .then(res => {
                console.log(res);
                tableList();
                toast("Deleted")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const filterMyData = TableData.filter((list) =>
        list.firstName.toLowerCase().includes(filterData.toLowerCase()) ||
        list.lastName.toLowerCase().includes(filterData.toLowerCase()) ||
        list.Phone.toLowerCase().includes(filterData.toLowerCase()) ||
        list.Age.toLowerCase().includes(filterData.toLowerCase()) ||
        list.selectUser.toLowerCase().includes(filterData.toLowerCase())
    )
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
                    <div className="col-md-6">
                    </div>
                </div>
                <input value={filterData} onChange={(e) => setFilterData(e.target.value)} type="text" className='form-control mt-3' style={{ width: "50%" }} />

                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone </th>
                            <th scope="col"> Age</th>
                            <th scope="col">Users</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterMyData.map((list, j) => {
                                return (
                                    <tr key={j}>
                                        <th scope="row">{list.id}</th>
                                        <td>{list.firstName}</td>
                                        <td>{list.lastName}</td>
                                        <td>{list.Phone}</td>
                                        <td>{list.Age}</td>
                                        <td>{list.selectUser}</td>
                                        <td >
                                            <button className='m-2 btn btn-danger' onClick={() => handleDelete(list.id)}>Delete</button>
                                            <Link to={'/crud-View/' + list.id}><button className='m-2 btn btn-primary'>View</button></Link>
                                            <Link to={'/crud-update/' + list.id}><button className='m-2 btn btn-warning'>Update</button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </>
    )
}

export default Crud