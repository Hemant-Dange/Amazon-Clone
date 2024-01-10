import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect with Us</h3>
          <p>
            <a href="https://www.facebook.com/AmazonIN/" target="blank">
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/amazonIN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="blank"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/amazondotin/?hl=en"
              target="blank"
            >
              Instagram
            </a>
          </p>
          <p>
            <a href="https://github.com/Hemant-Dange" target="blank">
              Git-Hub
            </a>
          </p>
        </div>
        <div className="footer_details_one">
          <h3>Make Money With Us</h3>
          <p>Sell on Amazon</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
        </div>
        <div className="footer_details_one">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="lastdetails">
        <div>
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </div>
        <div className="final_footer">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
          <p>© 1996-{year}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
