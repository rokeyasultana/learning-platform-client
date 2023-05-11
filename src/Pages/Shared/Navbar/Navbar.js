import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

import DarkMode from './DarkMode/DarkMode';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  
    
   

    const handleLogOut = () => {
     logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }
  const menuItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/courses">Courses</Link></li>

  <li><Link to="/blog">Blogs</Link></li>
  <li><Link to="/faq">Faq</Link></li>

  <li>{user?.uid ?
                                <img className='rounded-full gap-3'
                                title={user?.displayName}
                              style={{width: '70px'}}
                                    src={user?.photoURL}>
                                </img>
                                : <div><FaUser color="purple" fontSize="1.5em"/></div>
                            }
          </li>

  <li className='mt-2'>{user?.uid?  <button onClick={handleLogOut} class="btn btn-ghost text-purple-400">
 
    
    Sign out</button> :<Link to="/login">Login</Link>}</li>
    



</>
  
    return (
        <div>


<div className="navbar  text-purple-700 font-bold">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {menuItems}
                  </ul>
              </div>
              <img style={{height:'40px'}} src={logo} alt="" />
              <a className="btn btn-ghost normal-case text-xl font-sans ">Program Source</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                  {menuItems}
              </ul>
          </div>
      </div>

        
        </div>
    );
};

export default Navbar;
