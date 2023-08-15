import { useEffect, useState } from "react";
import Login from "../components/Login";

export default function LoginPage() {
    const [isLoggedIn, updateIsLoggedIn] = useState(false)

    useEffect(() => {
        let isLoggedInValue = localStorage.getItem('isLoggedIn')

        if (isLoggedInValue === '1') {
            updateIsLoggedIn(true)
        }
    }, [])
    
    const loginHandler = (email: string, password: string) => {
        localStorage.setItem('isLoggedIn', '1')
        updateIsLoggedIn(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        updateIsLoggedIn(false)
    }

    return (
        <main>
            {isLoggedIn ? (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            ) : (
                <Login 
                    onLogin={loginHandler}
                    isLoggedIn={isLoggedIn}
                    logoutHandler={logoutHandler} />
            )}
        </main>
    )
}