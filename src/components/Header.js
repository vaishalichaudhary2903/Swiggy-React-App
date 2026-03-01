import { useState } from 'react';
import {LOGO_URL} from '../utils/Constants'
import { Link } from 'react-router';



const Header = () => {
    const [btnText, setBtnText] = useState("Login")
  return (
    <div className="header">
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/about">About Us </Link></li>
          <li>Cart</li>
          <li><button onClick={()=>{btnText === 'Login' ? setBtnText("Logout") : setBtnText("Login")}}>{btnText}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header