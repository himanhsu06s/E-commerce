import React, { useState ,useEffect} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const[showMenu,setShowMenu] = useState(false);
    const location = useLocation();

    // Update the menu state based on the path name
    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setMenu('shop');
        else if (path === '/mens') setMenu('Mens');
        else if (path === '/women') setMenu('Women');
        else if (path === '/kids') setMenu('Kids');
    /*else if(path === '/login') setMenu('login');
    else if(path === '/cart') setMenu('cart');
    
    this method can also be used but not efficient do set the menu
    */
        else setMenu(undefined)
    }, [location]);

    return (
        <div>
            <nav className='navbar'>
                <div className="navlogo">
                <Link to="/"><img src={logo} alt="logo" />
                    <h2>buyNow</h2></Link>
                </div>
                <div className="mobile-menu-icon" onClick={()=>setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg>
                </div>
                <ul className={`nav-menu ${showMenu?'open':''}`}>
                    <li><Link to="/">Home</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li><Link to="/mens">Men</Link>{menu === "Mens" ? <hr /> : <></>}</li>
                    <li ><Link to="/women">Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                    <li><Link to="/kids">Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-car">
                <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt='cart'/></Link>
                </div>
            </nav>
        </div>
    );
};
