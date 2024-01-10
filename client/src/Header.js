import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import img1 from "./images/india.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__address">
        <div className="add_left">
          <LocationOnIcon className="LocationIcon" />
        </div>
        <div className="add_right">
          <span className="optionLineOne">Delivering To Home</span>
          <span className="optionLineTwo">Update Location</span>
        </div>
      </div>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon.in"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div class="header__nav">
        <div class="header__option">
          <div class="nation">
            <img className="header__flag" src={img1} alt="india" />
            <span className="optionLineTwo">EN</span>
          </div>
        </div>
        <NavLink to="/login">
          <div class="header__option">
            <span className="optionLineOne">Hello Guest</span>
            <span className="optionLineTwo">Sign In</span>
          </div>
        </NavLink>
        <div class="header__option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>
        <div class="header__option inline">
          <Link to="/checkout">
            <ShoppingCartIcon id="icon" />
            <span className="optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
        <div class="header__option">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
