import { useEffect, useState } from "react"
import UserDetails from "../components/User/UserDetails"
import UserForm from "../components/User/UserForm"
import axios from "axios"
import Loader from "../components/User/Loader"


export default function UserPage() {
    let [showForm, setShowForm] = useState(false)
    let [users, setUsers] = useState([])
    let [loading, setLoading] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')
    let [editMode, setEditMode] = useState(false)
    let [editUser, setEditUser] = useState(null)

    useEffect(() => {
        fetchUsers()
    }, [])

    function openForm() {
        setEditMode(false)
        setShowForm(true)
    }

    function closeForm(){
        setShowForm(false)
    }

    function onCreateUser(user: any) {
        // fetch('https://react-tutorial-6178d-default-rtdb.firebaseio.com/users.json', {
        //     method: 'POST',
        //     body: JSON.stringify(user),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then((res) => {
        //     console.log(res)
        // })

        axios.post('https://react-tutorial-6178d-default-rtdb.firebaseio.com/users.json', user)
            .then((res) => {
                console.log(res.data)
                fetchUsers()
                setShowForm(false)
            })
    }

    function fetchUsers() {
        setLoading(true)
        setErrorMessage('')
        fetch('https://react-tutorial-6178d-default-rtdb.firebaseio.com/users.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let userData = []
                for (let key in data) {
                    userData.push({...data[key], id: key})
                }
                setUsers(userData as never[])
                setLoading(false)
            })
            .catch((error) => {
                setErrorMessage(error.message)
                setLoading(false)
            })
    }
    function onEditUser(user: any) {
        setEditMode(true)
        setEditUser(user)
        setShowForm(true)
        console.log(user)
    }

    return (
        <div>
            <div className="page-header">
                <button className="btn btn-success" onClick={openForm}>Add User</button>
                <button className="btn btn-warning" onClick={fetchUsers}>Get Users</button>
            </div>
            {!loading && !errorMessage && <UserDetails users={users} onEditUser={onEditUser}></UserDetails>}
            {errorMessage && <h3 style={{textAlign: 'center'}}>{errorMessage}</h3>}
            {loading && <Loader />}
            {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={editUser}></UserForm>}
        </div>
    )
}