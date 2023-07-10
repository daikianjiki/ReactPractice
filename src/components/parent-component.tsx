import ChildComponent from "./child-component"

const ParentComponent: React.FC = () => {
    return (
        <>
            <h1>Parent Component:</h1>
            <ChildComponent username="test" password="pass" />
        </>
    )
}
export default ParentComponent