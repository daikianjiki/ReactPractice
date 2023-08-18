import { FormEvent, useRef } from 'react'
import './UserForm.css'

interface UserFormProps {
    closeForm: () => void
    onCreateUser: (user: any) => void
}

export default function UserForm(props: UserFormProps) {
    let fnameRef = useRef<HTMLInputElement>(null)
    let lnameRef = useRef<HTMLInputElement>(null)
    let emailRef = useRef<HTMLInputElement>(null)
    let passwordRef = useRef<HTMLInputElement>(null)
    let countryRef = useRef<HTMLSelectElement>(null)
    let cityRef = useRef<HTMLSelectElement>(null)
    let dateRef = useRef<HTMLInputElement>(null)
    let genderRef = useRef<HTMLSelectElement>(null)

    function onCreateUser(event:FormEvent) {
        event.preventDefault()
        let user = {
            firstName: fnameRef.current?.value,
            lastName: lnameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            country: countryRef.current?.value,
            city: cityRef.current?.value,
            dob: dateRef.current?.value,
            gender: genderRef.current?.value
        }
        props.onCreateUser(user)
    }
    return (
        <>
            <div id="myModal">
                <div id="modal-content">
                    <div className="close" onClick={props.closeForm}>&times;</div>
                    <h3>Create new user</h3>
                    <div className="user-form">
                        <form onSubmit={onCreateUser}>
                            <div>
                                <input type="text" placeholder="First name" ref={fnameRef}/>
                                <input type="text" placeholder="Last name" ref={lnameRef}/>
                            </div>
                            <div>
                                <input type='email' placeholder='Email' ref={emailRef} />
                            </div>
                            <div>
                                <input type="password" placeholder="Password" ref={passwordRef}/>
                                <input type="password" placeholder="Confirm password" />
                            </div>
                            <div>
                                <select name="country" ref={countryRef}>
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                </select>
                                <select name="city" ref={cityRef}>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Berlin">Berlin</option>
                                    <option value="New York">New York</option>
                                    <option value="London">London</option>
                                </select>
                            </div>
                            <div>
                                <input type="date" placeholder="Date of Birth" ref={dateRef}/>
                                <select name="gender" ref={genderRef}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <button className="add-user-button">Create User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}