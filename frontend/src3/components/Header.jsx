import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between pb-2 shadow-md shadow-olive-700">
        <span className="ml-2 text-3xl font-mono font-extralight tracking-widest self-start w-1/5">Website</span>
        <nav className="w-4/5 flex justify-evenly">
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/about">about</Link>
            <Link className="btn" to="/contact">contact</Link>
            <Link className="btn" to="/register">Get started</Link>
        </nav>
    </header>
  );
};

export default Header;
