import { useState } from "react"
import UserDetails from "../components/User/UserDetails"
import UserForm from "../components/User/UserForm"


export default function UserPage() {
    let[showForm, setShowForm] = useState(false)

    function openForm() {
        setShowForm(true)
    }

    function closeForm(){
        setShowForm(false)
    }

    return (
        <div>
            <div className="page-header">
                <button className="btn btn-success" onClick={openForm}>Add User</button>
                <button className="btn btn-warning">Get Users</button>
            </div>
            <UserDetails></UserDetails>
            {showForm && <UserForm closeForm={closeForm}></UserForm>}
        </div>
    )
}