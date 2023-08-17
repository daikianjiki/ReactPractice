import { Component } from "react";
import Demo from "../ClassComponents/Demo";
import DemoContext from "../ClassComponents/DemoContext";
import ErrorBoundary from "../ClassComponents/ErrorBoundaries";

class ClassBasedComponentsPage extends Component {
    render() {
        return (
            <>
                <DemoContext.Provider value={{value: "This value is coming from DemoContext"}}>
                    <ErrorBoundary>
                        <Demo name={"Hello World"}>Children props from Class Based Components Page</Demo>
                    </ErrorBoundary>
                </DemoContext.Provider>
            </>
        )
    }
}

export default ClassBasedComponentsPage