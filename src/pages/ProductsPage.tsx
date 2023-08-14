import { useState } from "react";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import ProductList from "../components/ProductList/ProductList";
import { Product } from "../models/Product";
import FilterProduct from "../components/FilterProduct/FilterProduct";


const products: Product[] = [
    {
        pID: 1, 
        pName: 'Fresh Milk', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
]


export default function ProductsPage() {

    let [newProductList, setProductList] = useState<Product[]>(products)
    let [filterTextValue, setFilterText] = useState('all')

    let filteredProductList = newProductList.filter((product) => {
        if(filterTextValue === 'available') {
            return product.isAvailable === true
        } else if(filterTextValue === 'unavailable') {
            return product.isAvailable === false
        } else {
            return product
        }
    })
    function createProduct(product: Product) {
        product.pID = newProductList.length + 1
        setProductList([product, ...newProductList])
    }

    function onFilterValueSelected(filterValue: any) {
        setFilterText(filterValue);
    }
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <CreateProduct createProduct={createProduct} />
                <FilterProduct filterValueSelected={onFilterValueSelected} />
                <ProductList newProductList={filteredProductList} />
            </div>
        </div>
    )
}