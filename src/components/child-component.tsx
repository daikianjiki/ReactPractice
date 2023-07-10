
interface User {
    username: string
    password: string
}

const ChildComponent : React.FC<User> = (user: User) => {
    return (
        <>
            <h2>Child Component Data for User:</h2>
            <p>Username: { user.username }</p>
            <p>Password: { user.password }</p>
        </>

    )
}
export default ChildComponent