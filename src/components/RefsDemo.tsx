import { useRef } from "react"

export default function RefsDemo() {
    let nameInput = useRef<HTMLInputElement>(null)

    function showNameEventHandler() {
        console.log(nameInput.current?.value)
    }
    return (
        <>
            <h3>Open up a console to see what it logs!</h3>
            <span>Name:</span>
            <input type="text" ref={nameInput}/>
            <button onClick={showNameEventHandler}>Show Name</button>
        </>
    )
}