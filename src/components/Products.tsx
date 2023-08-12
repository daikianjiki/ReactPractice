
let productCount = 0

function displayFormattedProductionCount() {
    return (
        productCount > 0 ? productCount : 'Zero'
    )
}

export default function Products() {
    return (
        <ul className="list-group shadow">
            <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
                        <p className="font-italic text-muted mb-0 small">This is milk. It's creamy and tasty and great for health! Have a glass, it will be worth your while!</p>
                        <div className="d-flex align-items-center justify-content-start mt-1">
                            <h6 className="font-weight-bold my-2">$120.00</h6>
                            <button className="btn btn-primary">-</button>
                            <span>{ displayFormattedProductionCount() }</span>
                            <button className="btn btn-primary">+</button>
                        </div>
                    </div><img src="" alt="Generic placeholder image" width="200" className="ml-;g-5 order-1 orderlg-2" />
                </div>
            </li>
        </ul>
    )
}