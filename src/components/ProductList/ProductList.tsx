import { Product } from "../../models/Product"
import Products from "./Products"


interface ProductProps {
    newProductList: Product[]
}
export default function ProductList(prop: ProductProps) {
    if (prop.newProductList.length === 0) return <h3>No products available</h3>
    return (
        <ul className="list-group shadow">
            {prop.newProductList.map(product => (
                    <Products key={product.pID} product={product} />
            ))}
        </ul>
    )
}