import { ChangeEvent, useState } from "react";

export default function Form() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isDisabled, setDisabled] = useState(false)
    
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        
        if (e.target.name === "username") {
            setUsername(e.target.value)
            if (e.target.value.length > 4) {
                setDisabled(true)
            } else {
                setDisabled(false)
            }
        } else if (e.target.name === "password") {
            if (e.target.value.length > 8)
            setPassword(e.target.value)
        }   
    }
    return (
        <>
            <h1>Form</h1>
            <label>Username: </label>
            <input type="text" name="username" onChange={onChange}/> <span> Username must be longer than 4 characters</span>
            <label>Password: </label>
            <input type="text" name="password" onChange={onChange}/> <span> Password must be longer than 8 characters</span>

            <p>Username: {username}</p>
            <p>Password: {password}</p>

            <button disabled={!isDisabled}>Button</button>
        </>
    )
}