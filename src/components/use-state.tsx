import { useState } from "react"

const UseState: React.FC = () => {

    const [numberState, setNumberState] = useState(0)
    const increment = () => {
        setNumberState(numberState + 1)
    }

    const decrement = () => {
        setNumberState(numberState - 1)
    }
    return (
        <>
            <h2>{numberState}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default UseState