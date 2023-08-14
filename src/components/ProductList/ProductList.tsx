import { Product } from "../../models/Product"
import Products from "./Products"


interface ProductProps {
    newProductList: Product[]
}
export default function ProductList(prop: ProductProps) {
    return (
        <ul className="list-group shadow">
            {prop.newProductList.map(product => (
                    <Products key={product.pID} product={product} />
            ))}
        </ul>
    )
}