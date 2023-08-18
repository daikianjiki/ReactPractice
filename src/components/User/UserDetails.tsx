import './UserDetails.css'

interface userProps {
    users: any
    onEditUser: (user: any) => void
}

export default function UserDetails(props: userProps) {
    function onEditUserClicked(event: any, user: any) {
        props.onEditUser(user)
    }
    return (
        <>
            <div className="user-details">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>City</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.firstName + " " + user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>{user.gender}</td>
                                <td>{user.country}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={(event) => onEditUserClicked(event, user)}>Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}