import React from "react";
import "./Header2.css";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function Header2() {
  return (
    <div className="new_nav">
      <div class="nav_data">
        <div class="left_data">
          <p>
            <ViewHeadlineIcon />
            All
          </p>
          <p>Amazon miniTV</p>
          <p>Best Sellers</p>
          <p>Today's Deals</p>
          <p>Electronics</p>
          <p>Customer Service</p>
          <p>New Releases</p>
          <p>Home & Kitchen</p>
          <p>Fashion</p>
        </div>
        <div class="right_data">
          <img className="image" src="./nav.jpg" alt="navlogo" />
        </div>
      </div>
    </div>
  );
}

export default Header2;
