import { useEffect, useState } from "react"
import useCounter from "./use-counter"

export default function Increment() {
    let counter = useCounter(true)

    return (
        <div>{counter}</div>
    )
}