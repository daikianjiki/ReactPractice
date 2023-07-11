import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ParentChildPage from '../pages/ParentChildPage'
import UseStatePage from '../pages/UseStatePage'
import PokemonPage from '../pages/PokemonPage'

const Navbar: React.FC = () => {
    return (
        <div className="container">
        <Link to="/">
            <Button>Parent-Child</Button>
        </Link>
        <Link to="/usestate">
            <Button>UseState</Button>
        </Link>
        <Link to="/pokemon">
            <Button>Pokemon</Button>
        </Link>
        
        <Routes>
            <Route path ='/' element = {<ParentChildPage/>} />
            <Route path ='/usestate' element = {<UseStatePage/>} />
            <Route path ='/pokemon' element = {<PokemonPage/>} />
        </Routes>
    </div>
    )
}

export default Navbar