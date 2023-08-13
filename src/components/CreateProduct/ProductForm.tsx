import { ChangeEvent } from "react";

export default function ProductForm() {
    function nameInputHandler(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
    }

    function priceInputHandler(event: ChangeEvent<HTMLInputElement>) {
        
    }

    function descriptionInputHandler(event: ChangeEvent<HTMLInputElement>) {

    }

    function availabilityInputHandler(even: ChangeEvent<HTMLInputElement>) {

    }

    function imageInputHandler(event: ChangeEvent<HTMLInputElement>) {

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