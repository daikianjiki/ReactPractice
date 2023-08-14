import { Product } from "../../models/Product";
import ProductForm from "./ProductForm";

interface ProductProps {
    createProduct: (product: Product) => void
}

export default function CreateProduct(props: ProductProps) {
    function onCreateProduct(product: Product) {
        props.createProduct(product)
    }
    return (
        <div style={{backgroundColor: 'white', padding: '10px 20px', borderRadius: 2}}>
            <ProductForm createProduct={onCreateProduct}/>
        </div>
    )
}