import { ChangeEvent, FormEvent, useEffect, useReducer, useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import AuthContext from "./Context/AuthContext";

type EmailState = {
    value: string
    isValid: boolean | undefined
}

type PasswordState = {
    value: string
    isValid: boolean | undefined
}

type EmailAction = {type:'EMAIL_INPUT' | 'EMAIL_VALID', val: string}
type PasswordAction = {type:'PASSWORD_INPUT' | 'PASSWORD_VALID', val: string}

function emailReducer(state: EmailState, action: EmailAction) {
    switch(action.type) {
        case 'EMAIL_INPUT':
            return {value: action.val, isValid: undefined}
        case 'EMAIL_VALID':
            return {value: state.value, isValid: state.value.includes('@')}
    }
}
function passwordReducer(state: PasswordState, action: PasswordAction) {
    switch(action.type) {
        case 'PASSWORD_INPUT':
            return {value: action.val, isValid: undefined}
        case 'PASSWORD_VALID':
            return {value: state.value, isValid: state.value.trim().length > 6}
    }
}

interface LoginProps {
    onLogin: (email: string, password: string) => void;
    isLoggedIn: boolean;
    logoutHandler: () => void;
}

export default function Login(props: LoginProps) {
    const [formIsValid, setFormIsValid] = useState(false)

    const initialEmailState: EmailState = {
        value: "",
        isValid: false
    }

    const initialPasswordState: PasswordState = {
        value: "",
        isValid: false
    }

    let [emailState, emailDispatcher] = useReducer(emailReducer, initialEmailState)
    let [passwordState,  passwordDispatcher] = useReducer(passwordReducer, initialPasswordState)

    useEffect(() => {
        let value = setTimeout(() => {
            setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6)
        }, 500)

        return () => {
            clearTimeout(value)
        }
    }, [emailState.isValid, passwordState.isValid])

    function emailChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       emailDispatcher({val: event.target.value, type: 'EMAIL_INPUT'})
    }

    function passwordChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        passwordDispatcher({val: event.target.value, type: 'PASSWORD_INPUT'})
    }

    function validateEmailHandler() {
        emailDispatcher({val: emailState.value, type: 'EMAIL_VALID'})
    }

    function validatePasswordHandler() {
        passwordDispatcher({val: passwordState.value, type: 'PASSWORD_VALID'})
    }

    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.onLogin(emailState.value, passwordState.value)

    }

    let context = useContext(AuthContext)
    return (
        <>
        <h3>Validated Form using useReducer</h3>
        <h4>Enter proper email and password longer than 6 characters.</h4>
        <Card>
            {context.isLoggedIn ? (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <button onClick={props.logoutHandler}>Logout</button>
                </div>
            ) : (
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            value={emailState.value}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={passwordState.value}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                        />
                    </div>
                    <div>
                        <Button type="submit" disabled={!formIsValid}>
                            Login
                        </Button>
                    </div>
                </form>
                )}
            </Card>
        </>
    )
}