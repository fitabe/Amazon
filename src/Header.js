import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <Link to="/" className="Address-container">
        <div>
          <LocationOnOutlinedIcon />
        </div>
        <div>
          Hello
          <p className="Select-address">
            {!user ? "Select your address" : `Rt 59 Plainfield IL 60544`}
          </p>
        </div>
      </Link>
      <div className="header__search">
        <select className="All-select">
          <option>All</option>
        </select>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <Link className="US" to="/">
        <div className="language-image">
          <img src="https://www.shutterstock.com/image-vector/united-states-america-flag-vector-260nw-1406928203.jpg" />
        </div>
        <p className="language-container border-white ">EN</p>
      </Link>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="https://netflix-new-a1d1c.web.app" target="_blank">
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime video</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <AddShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
