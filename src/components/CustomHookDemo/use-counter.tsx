import { useState, useEffect } from "react"


export default function useCounter(increment: boolean) {
    let[counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (increment) {
                setCounter(counter => counter + 1)
            } else {
                setCounter(counter => counter - 1)
            }
        }, 1000)
    }, [])

    return counter;
}