import { ChangeEvent, useState } from "react";

export default function Form() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }   
    }
    return (
        <>
            <h1>Form</h1>
            <label>Username: </label>
            <input type="text" name="username" onChange={onChange}/>
            <label>Password: </label>
            <input type="text" name="password" onChange={onChange}/>

            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </>
    )

}