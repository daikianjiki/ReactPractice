import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { Product } from "../../models/Product";

interface ProductProps {
    createProduct: (product: Product) => void
    onCancel: any
}

export default function ProductForm(props: ProductProps) {
    // let [name, setName] = useState('')
    // let [price, setPrice] = useState('')
    // let [description, setDescription] = useState('')
    // let [availability, setAvailability] = useState('')
    // let [image, setImage] = useState('')

    // let [userInput, setUserInput] = useState({
    //     name: '',
    //     price: '',
    //     description: '',
    //     availability: '',
    //     image: ''
    // })
    let [userInput, setUserInput] = useState<Product>({
        pID: 0,
        pName: '',
        price: 0,
        desc: '',
        isAvailable: false,
        image: ''
    })

    function nameInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setName(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState, pName: event.target.value
            }
        })
    }

    function priceInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setPrice(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState, 
                price: parseInt(event.target.value)
            }
        })
    }

    function descriptionInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setDescription(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState,
                desc: event.target.value
            }
        })
    }

    function availabilityInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setAvailability(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState,
                isAvailable: event.target.checked
            }
        })
    }

    function imageInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setImage(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState,
                image: event.target.value
            }
        })
    }

    function createProductEventHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let product: Product = {
            pID: userInput.pID,
            pName: userInput.pName,
            desc: userInput.desc,
            isAvailable: userInput.isAvailable,
            image: userInput.image,
            price: userInput.price
        }

        setUserInput({
            pID: 0,
            pName: '',
            price: 0,
            desc: '',
            isAvailable: false,
            image: ''
        })

        props.createProduct(product)
        props.onCancel()
    }
    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name"
                        value={userInput.pName}
                        onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price"
                        value={userInput.price}
                        onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description"
                        value={userInput.desc}
                        onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" 
                checked={userInput.isAvailable}
                onChange={availabilityInputHandler} />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" 
                value={userInput.image}
                onChange={imageInputHandler} />
            </div>
            

            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
        </form>
    )
}