import "./navbar.globals.css";
import React from 'react';

const Navbar = () => {
  return (
    <header>
        <nav className='navbar flex bg-[#2b2d42ff] h-[70px] text-white justify-around items-center'>
            <ul className="flex">
                <li className="mx-[10px] transition ease-in-out duration-300 hover:text-[#fca311ff] hover:border-b-[#fca311ff] text-lg"><a className="navbar-links" href="#">About</a></li>
                <li className="mx-[10px] transition ease-in-out duration-300 hover:text-[#fca311ff] hover:border-b-[#fca311ff] text-lg"><a className="navbar-links" href="#">Services</a></li>
                <li className="mx-[10px] transition ease-in-out duration-300 hover:text-[#fca311ff] hover:border-b-[#fca311ff] text-lg"><a className="navbar-links" href="#">Projects</a></li>
                <li className="mx-[10px] transition ease-in-out duration-300 hover:text-[#fca311ff] hover:border-b-[#fca311ff] text-lg"><a className="navbar-links" href="#">Contact</a></li>
            </ul>
            <button className="btn text-white px-5 py-2 rounded-md bg-[#ef233cff] font-medium transition ease-in-out duration-300 delay-75 hover:bg-[#fca311ff] hover:scale-105 hover:text-[#2b2d42ff]">Let's Talk!</button>
        </nav>
    </header>
  )
}

export default Navbar