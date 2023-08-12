import Products from "../components/Products"
import ParentComponent from "../components/parent-component"

const ParentChildPage = () => {
    return (
        <>
            <ParentComponent />
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default ParentChildPage