import { memo } from "react"


function Button(props: any) {
    console.log("Button Executed from ", props.children)
    return (
        <button onClick={props.clickHandler}>{props.children}</button>
    )
}

export default memo(Button)