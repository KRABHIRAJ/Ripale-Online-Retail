import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../context/StateProvider';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [{ basket }] = useStateValue();
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <Link to="/">
            <img
                className='navbar__logo'
                src='images/logo-new.png'
                alt='logo'
            />
        </Link>
        
         

          <div className='navbar__search'>
              <input
                  type="text"
                  className="navbar__input"
              />
              <SearchIcon className="search__icon" />
          </div>

          <div className='navbar__right'>
              <strong className='navbar__item'>Login</strong>
              <strong className='navbar__item'>Become a Seller</strong>
                <div onClick={() => navigate("/checkout")} className='cart'>
                    <ShoppingCartIcon />
                    <strong>{ basket?.length }</strong>
                </div>
              
          </div>

    </div>
  )
}

export default Navbar
