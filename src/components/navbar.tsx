import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ParentChildPage from '../pages/ParentChildPage'
import UseStatePage from '../pages/UseStatePage'
import PokemonPage from '../pages/PokemonPage'
import FormPage from '../pages/FormPage'
import ProductsPage from '../pages/ProductsPage'
import UseRefPage from '../pages/UseRefPage'
import UseReducerPage from '../pages/UseReducerPage'
import LoginPage from '../pages/LoginPage'
import AuthContext from './Context/AuthContext'
import UseCallBackPage from '../pages/UseCallBackPage'
import ClassBasedComponentsPage from '../pages/ClassBasedComponentsPage'
import UserPage from '../pages/UserPage'
import CustomHookPage from '../pages/CustomHookPage'

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
            <Link to="/form">
                <Button>Form</Button>
            </Link>
            <Link to="/products">
                <Button>Products</Button>
            </Link>
            <Link to="/refs">
                <Button>UseRefs</Button>
            </Link>
            <Link to="/reducer">
                <Button>UseReducer</Button>
            </Link>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <Link to="/callback">
                <Button>UseCallBack</Button>
            </Link>
            <Link to="/class">
                <Button>ClassBased</Button>
            </Link>
            <Link to="/user">
                <Button>User</Button>
            </Link>
            <Link to="/customhook">
                <Button>CustomHook</Button>
            </Link>
            
            <Routes>
                <Route path ='/' element = {<ParentChildPage/>} />
                <Route path ='/usestate' element = {<UseStatePage/>} />
                <Route path ='/pokemon' element = {<PokemonPage/>} />
                <Route path ='/form' element = {<FormPage/>} />
                <Route path ='/products' element = {<ProductsPage/>} />
                <Route path ='/refs' element = {<UseRefPage/>} />
                <Route path ='/reducer' element = {<UseReducerPage/>} />
                <Route path ='/login' element = {
                    <AuthContext.Provider value={{isLoggedIn:false, onLogout: () => {}, onLogin: () => {}}}>
                        <LoginPage />
                    </AuthContext.Provider>
                } />
                <Route path ='/callback' element = {<UseCallBackPage/>} />
                <Route path ='/class' element = {<ClassBasedComponentsPage/>} />
                <Route path ='/user' element = {<UserPage/>} />
                <Route path ='/customhook' element = {<CustomHookPage/>} />
            </Routes>
        </div>
    )
}

export default Navbar