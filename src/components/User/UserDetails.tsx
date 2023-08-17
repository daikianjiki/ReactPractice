import './UserDetails.css'

export default function UserDetails() {
    return (
        <>
            <div className="user-details">
                <table className="user-table">
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}