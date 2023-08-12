import { Product } from "../models/Product"

let productCount = 0
// if you have an image uploaded on to the application, to render the image, you 
// will need the require method.
//let imageUrl = require("../images/fresh-milk.png")
let isAvailable = 'Unavailable'

let badgeClass = 'badge-margin-left-240 badge '
badgeClass += isAvailable === 'Available' ? 'bg-success' : 'bg-danger'

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

interface ProductsProps {
    products: Product[]
}

export default function Products(props: ProductsProps) {
    return (
        <ul className="list-group shadow">
            {props.products.map(product => (
            <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{product.pName}</h5>
                        <p className="font-italic text-muted mb-0 small">{product.desc}</p>
                        <div className="d-flex align-items-center justify-content-start mt-1">
                            {/* Here we are using an inline styling and it requires double curly braces {{}} */}
                            <h6 className="font-weight-bold my-2" style={{marginRight: 30}}>{product.price}</h6>
                            <button className="btn btn-primary">-</button>
                            {/* Here we are assigning styling to a variable and passing the variable within the curly braces. */}
                            <span style={style}>{ displayFormattedProductionCount() }</span>
                            <button className="btn btn-primary">+</button>
                            <span className={badgeClass}>{product.isAvailable}</span>
                        </div>
                    </div>
                    <img src={product.image} alt={product.pName} width="200" className="ml-;g-5 order-1 orderlg-2" />
                </div>
            </li>
            ))}
        </ul>
    )
}