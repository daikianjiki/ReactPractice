import './UserDetails.css'

interface userProps {
    users: any
}

export default function UserDetails(props: userProps) {
    return (
        <>
            <div className="user-details">
                <table className="user-table">
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>City</th>
                        <th></th>
                    </tr>
                    {props.users.map((user: any) => (
                        <tr>
                            <td>{user.firstName + " " + user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                            <td>{user.gender}</td>
                            <td>{user.country}</td>
                            <td>{user.city}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}