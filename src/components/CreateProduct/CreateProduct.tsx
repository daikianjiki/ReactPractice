import { useState } from "react";
import { Product } from "../../models/Product";
import ProductForm from "./ProductForm";

interface ProductProps {
    createProduct: (product: Product) => void
}

export default function CreateProduct(props: ProductProps) {
    let [showForm, setShowForm] = useState(false)
    function onCreateProduct(product: Product) {
        props.createProduct(product)
    }

    function onCreateNewProduct() {
        setShowForm(true)
    }

    function onProductSubmittedOrCancelled() {
        setShowForm(false)
    }
    return (
        <div style={{backgroundColor: 'white', padding: '10px 20px', borderRadius: 2}}>
            {!showForm && <button onClick={onCreateNewProduct}>Create Product</button>}
            {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedOrCancelled} />}
        </div>
    )
}