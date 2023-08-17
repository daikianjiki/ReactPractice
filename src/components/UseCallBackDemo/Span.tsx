import { memo } from "react"

function Span(props: any) {
    console.log("Span Executed from ", props.children)
    return (
        <span>{props.children}</span>
    )
}

export default memo(Span)