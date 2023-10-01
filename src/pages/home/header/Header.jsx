import { useEffect, useState } from "react";
import CustomLink from "../../../shared/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import logo from '../../../images/hydrospare_Logo.png';
import './Header.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    return <nav className={scrolled ? "scrolled" : ""}>
      <div className="lg:mx-28 md:mx-2">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 
                 rounded-box w-52 
                res-nav"
              >
                <li>
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/games">Games</CustomLink>
                </li>
                <li>
                  <CustomLink to="/login">Login</CustomLink>
                </li>
              </ul>
            </div>
            <Link
              to="/home"
              className="flex items-center"
            >
              <div>
                <img className="w-24" src={logo} alt="" />
              </div>
              <div>
                <div className="flex gap-1 text-5xl font-bold">
                <span>W</span><span>T</span><span>E</span><span>G</span>
                </div>
                <p className="pl-1">Water The Earth Gift</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="">
                <CustomLink to="/home">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About</CustomLink>
              </li>
              <li>
                <CustomLink to="/games">Games</CustomLink>
              </li>
              <li>
                <CustomLink to="/quizzes">Quizzes</CustomLink>
              </li>
              <li>
                <CustomLink to="/blogs">Blogs</CustomLink>
              </li>
              <li>
                <CustomLink to="/login">Login</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
}

export default Header;