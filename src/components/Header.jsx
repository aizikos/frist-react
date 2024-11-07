import React from "react";
import LOGO from "../img/Rectangle.svg"
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <Link to={'/'}>
                        <img src={LOGO} alt="" />
                    </Link>
                    <div className="nav">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/recipes'}>Recipes</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/top-rated'}>Top rated</NavLink>
                    </div>

                    <div className="header-btn">
                            <button>Save</button>
                            <button>Done</button>
                        </div>
                </div>
            </div>
        </div>
    )
}




export default Header