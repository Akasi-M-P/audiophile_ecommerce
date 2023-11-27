import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <header className="Navbar sm:px-12">
        {/* Mobile */}
        <div className="">
          <FaBars className="w-10 h-10" />
        </div>
        {/* Mobile Ends*/}
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/">
              <p>HOME</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/speakers">
              <p>SPEAKERS</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/earphones">
              <p>EARPHONES</p>
            </Link>
          </div>
          <div className="nav-link">
            <IoCartOutline />
          </div>
        </div>
        {/* Mobile */}
        <div className="nav-link">
          <Link to="/">
            <p className="text-3xl font-bold">audiophile</p>
          </Link>
        </div>
        <div className="mobile-nav sm:w-12">
          <IoCartOutline className="sm:w-12 sm:h-12" />
        </div>
        {/* Mobile Ends */}
        <div className="close-nav">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </header>
      <div className="mobileNav">
        <div className="nav-links-mobile">
          <div className="nav-link-mobile">
            <p>
              <a href="/">Home</a>
            </p>
          </div>
          <div className="nav-link-mobile">
            <p>
              <a href="/">About</a>
            </p>
          </div>
          <div className="nav-link-mobile">
            <select name="Courses" id="">
              <option value="courses">Courses</option>
              <option value="online">Online</option>
              <option value="in-person">In-Person</option>
            </select>
          </div>
          <div className="nav-link-mobile">
            <select name="Courses" id="">
              <option value="blog">Blog</option>
              <option value="news">News</option>
              <option value="updates">Updates</option>
            </select>
          </div>
          <div className="nav-link-mobile">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
