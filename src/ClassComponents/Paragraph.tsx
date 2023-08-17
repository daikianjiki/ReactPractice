import { Component } from "react";
import DemoContext from "./DemoContext";

interface ParagraphProps {
    text: string
}

class Paragraph extends Component<ParagraphProps> {
componentWillUnmount(): void {
    console.log("componentUnmount Called")
}
    render() {
        return (
            <DemoContext.Consumer>
                {(ctx) => {
                    return <p>{ctx.value}</p>
                }}
            </DemoContext.Consumer>
        )
    }
}

export default Paragraph