import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ParentChildPage from '../pages/ParentChildPage'
import UseStatePage from '../pages/UseStatePage'

const Navbar: React.FC = () => {
    return (
        <div className="container">
        <Link to="/">
            <Button>Parent-Child</Button>
        </Link>
        <Link to="/usestate">
            <Button>UseState</Button>
        </Link>
        <Link to="/cart">
            <Button>Cart</Button>
        </Link>
        
        <Routes>
            {/* <Route path ='/' element = {<HomePage/>} /> */}
            <Route path ='/' element = {<ParentChildPage/>} />
            <Route path ='/usestate' element = {<UseStatePage/>} />
        </Routes>
    </div>
    )
}

export default Navbar