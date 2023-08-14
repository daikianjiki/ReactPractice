import { Product } from "../../models/Product"
import ProductDetails from "./ProductDetails"
    
interface ProductsProps {
    product: Product
}
    
export default function Products(props: ProductsProps) {
    const { product } = props
    return (
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{product.pName}</h5>
                    <p className="font-italic text-muted mb-0 small">{product.desc}</p>
                    <ProductDetails product={product} />
                </div>
                <img src={product.image} alt={product.pName} width="200" className="ml-;g-5 order-1 orderlg-2" />
            </div>
        </li>
    )
}