import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ParentChildPage from '../pages/ParentChildPage'

const Navbar = () => {
    return (
        <div className="container">
        <Link to="/">
            <Button>Home</Button>
        </Link>
        <Link to="/product">
            <Button>Products</Button>
        </Link>
        <Link to="/cart">
            <Button>Cart</Button>
        </Link>
        
        <Routes>
            {/* <Route path ='/' element = {<HomePage/>} /> */}
            <Route path ='/' element = {<ParentChildPage/>} />
        </Routes>
    </div>
    )
}

export default Navbar