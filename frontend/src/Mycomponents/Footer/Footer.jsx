import React from 'react';
import'./Footer.css';
import footer_iogo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import printpress_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
return (
    <div className='footer'>
        <div className="footer-logo">
            <Link to='/'><img src={footer_iogo} alt=''/>
            <p>buyNow</p></Link>
        </div>
        <div className="footer-link">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>    
        </div>
        <div className="footer-social-icon">
            <ul>
                <li><img src={instagram_icon} alt=''/></li>
                <li><img src={printpress_icon} alt=''/></li>
                <li><img src={whatsapp_icon} alt=''/></li>
            </ul>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>

    </div>
)
}
