import React from 'react';
import './Footer.css';
// import logo from '../Assets/logo.png';
// import instagram from '../Assets/all_products';
// import whatsapp from '../Assets/all_products';
// import facebook from '../../Assets/all_products';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                {/* <img src={logo} alt="" /> */}
            </div>
            <ul className="footer_links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_social_icon">
                <div className="footer_icons_container">
                    {/* <img src={instagram} alt="instagram_icon" /> */}
                </div>
                <div className="footer_icons_container">
                    {/* {<img src={facebook} alt="facebook_icon" />} */}
                </div>
                <div className="footer_icons_container">
                    {/* <img src={whatsapp} alt="whatsapp_icon" /> */}
                </div>
                {/* <div className="footer_copyrigth"> */}
                    {/* <hr /> */}
                    {/* <p>Copyrigth @ 2024 </p> */}
                    {/* <hr /> */}
                    {/* <p>MICROSYSCOM</p> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Footer;
