import { ReactNode, createContext, useEffect, useState } from "react"

interface AuthContextType {
    isLoggedIn: boolean
    onLogout: () => void
    onLogin: (email: string, password: string) => void
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email: string, password: string) => {}
})


export function AuthContextProvider(props: AuthContextProviderProps) {
    let [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let isLoggedInValue = localStorage.getItem('isLoggedIn')

        if (isLoggedInValue === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    function loginHandler() {
        console.log("logging in...")
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    function logoutHandler() {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext