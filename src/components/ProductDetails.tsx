import { Product } from "../models/Product"

let productCount = 0

let style = {
    padding: '0px 20px',
    fontSize: 12
    //or 'font-size': 14
}

function displayFormattedProductionCount() {
    return (
        productCount > 0 ? productCount : 'Zero'
        )
    }

interface ProductDetailsProp {
    product: Product
}

export default function ProductDetails(props: ProductDetailsProp) {
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
        {/* Here we are using an inline styling and it requires double curly braces {{}} */}
        <h6 className="font-weight-bold my-2" style={{marginRight: 30}}>${props.product.price}</h6>
        <button className="btn btn-primary">-</button>
        {/* Here we are assigning styling to a variable and passing the variable within the curly braces. */}
        <span style={style}>{ displayFormattedProductionCount() }</span>
        <button className="btn btn-primary">+</button>
        <span className={`badge-margin-left-240 badge ${props.product.isAvailable ? 'bg-success' : 'bg-danger'}`}>
            {props.product.isAvailable ? 'Available' : 'Unavailable'}
        </span>
    </div>
    )
}