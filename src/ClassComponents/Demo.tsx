import { Component, ReactNode } from "react"
import Paragraph from "./Paragraph"

interface DemoProps {
    children: ReactNode
    name: ReactNode
}

interface DemoState {
    showParagraph: boolean
    count: number
}

class Demo extends Component<DemoProps, DemoState> {

    constructor(props: DemoProps) {
        super(props)
        this.state = {
            showParagraph: true,
            count: 0
        }
    }

    componentDidMount(): void {
        console.log("componentDidMount Called")
    }

    componentDidUpdate(prevProps: Readonly<DemoProps>, prevState: Readonly<DemoState>, snapshot?: any): void {
        console.log("componentDidUpdate Called")
        if(prevState.count !== this.state.count) {
            this.setState({count: this.state.count + 1})
        }
        //comment this out to see mount/unmount
        throw new Error("An error has occured!")
    }

    toggleParagraph() {
        this.setState((prevState) => ({
                showParagraph: !prevState.showParagraph
        }))
    }

    render() {
        return (
            <>
                <h3>{this.props.name}</h3>
                {this.state.showParagraph && <Paragraph text="This is a demo paragraph" />}
                <button onClick={this.toggleParagraph.bind(this)}>{this.state.showParagraph ? 'Hide' : 'Show'}</button>
            </>
        )
    }
}

export default Demo