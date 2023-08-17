import './UserForm.css'

interface UserFormProps {
    closeForm: () => void
}

export default function UserForm(props: UserFormProps) {
    return (
        <>
            <div id="myModal">
                <div className="modal-content">
                    <div className="close" onClick={props.closeForm}>&times;</div>
                    <h3>Create new user</h3>
                    <div className="user-form">
                        <form>
                            <div>
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <div>
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm password" />
                            </div>
                            <div>
                                <select name="country">
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                </select>
                                <select>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Berlin">Berlin</option>
                                    <option value="New York">New York</option>
                                    <option value="London">London</option>
                                </select>
                            </div>
                            <div>
                                <input type="date" placeholder="Date of Birth" />
                                <select name="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <button className="add-user-button">Create User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}