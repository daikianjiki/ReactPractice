import { useState } from "react";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import ProductList from "../components/ProductList/ProductList";
import { Product } from "../models/Product";



export default function ProductsPage() {

    let [newProduct, setNewProduct] = useState<Product | undefined>(undefined)

    function createProduct(product: Product) {
        setNewProduct(product)
    }
    return (
        <>
        <CreateProduct createProduct={createProduct}/>
        <ProductList newProduct={newProduct}/>
        </>
    )
}