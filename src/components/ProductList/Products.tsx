import { Product } from "../../models/Product"
import ProductDetails from "./ProductDetails"
    
interface ProductsProps {
    product: Product
}
    
export default function Products(props: ProductsProps) {
    return (
        <li className="list-group-item" style={{backgroundColor: props.product.isAvailable ? 'white' : '#dedede'}}>
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.product.pName}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.product.desc}</p>
                    <ProductDetails product={props.product} />
                </div>
                <img src={props.product.image} alt={props.product.pName} width="200" className="ml-;g-5 order-1 orderlg-2" />
            </div>
        </li>
    )
}