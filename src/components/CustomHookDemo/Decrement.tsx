import { useEffect, useState } from "react"
import useCounter from "./use-counter"

export default function Decrement() {
    let counter = useCounter(false)

    return (
        <div>{counter}</div>
    )
}