import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Span from "./Span";


export default function UseCallBackDemo() {
    let [count, setCount] = useState(0)
    let [activate, setActivate] = useState(false)

    let incrementHandler = useCallback(() => {
        if (activate) 
            setCount(count + 1)
    }, [activate])

    let decrementHandler = useCallback(() => {
        if (activate) 
            setCount(count - 1)
    }, [activate])

    function activateHandler() {
        setActivate(true)
    }

    let list = useMemo(() => {
        return [100, 200]
    }, [])

    console.log("UseCallBackDemo Component Executed")

    return (
        <div>
            <Button clickHandler={decrementHandler}> - </Button>
            <Span>{count}</Span>
            <Span>{list}</Span>
            <Button clickHandler={incrementHandler}> + </Button>
            <Button clickHandler={activateHandler}>Activate</Button>
        </div>
    )
}