import { useContext } from "react";
import Login from "../components/Login";
import AuthContext from "../components/Context/AuthContext";

export default function LoginPage() {
    let ctx = useContext(AuthContext)

    console.log("login page rendering... ")
    return (
        <>
            <main>
                {ctx.isLoggedIn ? (
                    <div>
                        <p>Welcome! You are logged in.</p>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </div>
                ) : (
                    <Login />
                )}
            </main>
        </>
    )
}