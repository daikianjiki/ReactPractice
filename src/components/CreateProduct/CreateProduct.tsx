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
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: 20}}>
                <ProductForm createProduct={onCreateProduct}/>
            </div>
        </div>
    )
}