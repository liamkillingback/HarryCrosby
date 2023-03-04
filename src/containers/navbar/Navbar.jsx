import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../../assets/dropdown.png';
import { setLogout } from '../../state';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [mobile, SetMobile] = useState('navbar__smaller_hide');
  const isAuth = Boolean(useSelector((state) => state.token));
  const dispatch = useDispatch();
  return (
    <>
      <div className='navbar__container'>
        <div className='navbar__header'>Harry Crosby</div>
        <div className='navbar__link_container'>
          <NavLink className='navbar__link' to='/'>
            Home
          </NavLink>

          <NavLink className='navbar__link' to='/Contact'>
            Contact
          </NavLink>

          <NavLink className='navbar__link' to='/Gallery'>
            Gallery
          </NavLink>
          <NavLink className='navbar__link' to='/Animation'>
            Animation
          </NavLink>

          <NavLink
            className={isAuth ? 'navbar__link hide' : 'navbar__link'}
            to='/login'
          >
            Login
          </NavLink>
          <NavLink
            className={isAuth ? 'navbar__link' : 'navbar__link hide'}
            onClick={() => dispatch(setLogout())}
          >
            Logout
          </NavLink>
        </div>
        <div className='navbar__dropdown'>
          <img
            style={{ width: '50px' }}
            onClick={() =>
              SetMobile((mobile) =>
                mobile === 'navbar__smaller_hide'
                  ? 'navbar__smaller'
                  : 'navbar__smaller_hide'
              )
            }
            className='navbar__dropdown_img'
            src={Dropdown}
            alt=''
          />
        </div>
      </div>
      <div className={mobile}>
        <a
          onClick={() =>
            SetMobile((mobile) =>
              mobile === 'navbar__smaller_hide'
                ? 'navbar__smaller'
                : 'navbar__smaller_hide'
            )
          }
          className='navbar__nav-links'
          href='/'
        >
          Home
        </a>
        <a
          onClick={() =>
            SetMobile((mobile) =>
              mobile === 'navbar__smaller_hide'
                ? 'navbar__smaller'
                : 'navbar__smaller_hide'
            )
          }
          className='navbar__nav-links'
          href='/Contact'
        >
          Contact
        </a>
        <a
          onClick={() =>
            SetMobile((mobile) =>
              mobile === 'navbar__smaller_hide'
                ? 'navbar__smaller'
                : 'navbar__smaller_hide'
            )
          }
          className='navbar__nav-links'
          href='/Gallery'
        >
          Gallery
        </a>
        <a
          onClick={() =>
            SetMobile((mobile) =>
              mobile === 'navbar__smaller_hide'
                ? 'navbar__smaller'
                : 'navbar__smaller_hide'
            )
          }
          className='navbar__nav-links'
          href='/Animation'
        >
          Animation
        </a>
        <a
          onClick={() =>
            SetMobile((mobile) =>
              mobile === 'navbar__smaller_hide'
                ? 'navbar__smaller'
                : 'navbar__smaller_hide'
            )
          }
          className='navbar__nav-links'
          href='/Login'
        >
          Login
        </a>
      </div>
    </>
  );
};
export default Navbar;
