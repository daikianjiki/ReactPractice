
interface User {
    username: string
    password: string
}

const ChildComponent : React.FC<User> = (user: User) => {
    return (
        <>
            <p>{ user.username }</p>
            <p>{ user.password }</p>
        </>

    )
}
export default ChildComponent