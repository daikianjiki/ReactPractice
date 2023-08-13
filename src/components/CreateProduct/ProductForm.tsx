import { ChangeEvent, useState } from "react";

export default function ProductForm() {
    // let [name, setName] = useState('')
    // let [price, setPrice] = useState('')
    // let [description, setDescription] = useState('')
    // let [availability, setAvailability] = useState('')
    // let [image, setImage] = useState('')

    let [userInput, setUserInput] = useState({
        name: '',
        price: '',
        description: '',
        availability: '',
        image: ''
    })

    function nameInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setName(event.target.value)
        setUserInput({
            ...userInput, 
            name: event.target.value})
    }

    function priceInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setPrice(event.target.value)
        setUserInput({
            ...userInput, 
            price: event.target.value})
    }

    function descriptionInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setDescription(event.target.value)
        setUserInput({
            ...userInput, 
            description: event.target.value})
    }

    function availabilityInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setAvailability(event.target.value)
        setUserInput({
            ...userInput, 
            availability: event.target.value})
    }

    function imageInputHandler(event: ChangeEvent<HTMLInputElement>) {
        //setImage(event.target.value)
        setUserInput({
            ...userInput, 
            image: event.target.value})
    }
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name"
                        onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price"
                        onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description"
                        onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" onChange={availabilityInputHandler} />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" onChange={imageInputHandler} />
            </div>
            

            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}