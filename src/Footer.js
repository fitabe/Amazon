import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="btn">
        <button
          className="click"
          onClick={() => {
            scrollTop();
          }}
        >
          Back to Top
        </button>
      </div>
      <div
        className="navFooterVerticalColumn navAccessibility"
        role="presentation"
      >
        <div className="navFooterVerticalRow navAccessibility">
          <div className="navFooterLinkCol navAccessibility">
            <div className="navFooterColHead">
              <div className="head">Get to Know Us</div>
              <ul>
                <li className="nav_first">
                  <Link to="https://www.amazon.jobs" className="nav_a">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://email.aboutamazon.com/l/637851/2020-10-29/pd87g?Traffic_Source=Blog&Module=hat"
                    className="nav_a"
                  >
                    Amazon Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer&token=about"
                    className="nav_a"
                  >
                    About Amazon
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.amazon.com/b?node=15701038011&ie=UTF8"
                    className="nav_a"
                  >
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sustainability.aboutamazon.com/?utm_source=gateway&utm_medium=footer&ref_=susty_footer"
                    className="nav_a"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="https://www.amazon.com/pr" className="nav_a">
                    Press Center
                  </Link>
                </li>
                <li>
                  <Link to="https://www.amazon.com/ir" className="nav_a">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/browse.html?node=2102313011&ref_=footer_devices"
                    className="nav_a"
                  >
                    Amazon Devices
                  </Link>
                </li>
                <li className="nav_last ">
                  <Link to="https://www.amazon.science" className="nav_a">
                    Amazon Science
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navFooterColSpacerInner navAccessibility"></div>
          <div className="navFooterLinkCol navAccessibility">
            <div className="navFooterColHead">
              <div className="head">Make Money with Us</div>
              <ul>
                <li className="nav_first">
                  <Link
                    to="https://sell.amazon.com/?ld=AZFSSOA&ref_=footer_soa"
                    className="nav_a"
                  >
                    Sell products on Amazon
                  </Link>
                </li>
                <li>
                  <Link to="https://developer.amazon.com" className="nav_a">
                    Sell apps on Amazon
                  </Link>
                </li>
                <li>
                  <Link to="https://supply.amazon.com" className="nav_a">
                    Supply to Amazon
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://brandservices.amazon.com/?ref=AOUSABRLGNRFOOT&ld=AOUSABRLGNRFOOT"
                    className="nav_a"
                  >
                    Protect & Build Your Brand
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://affiliate-program.amazon.com/"
                    className="nav_a"
                  >
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.fountain.com/jobs/amazon-delivery-service-partner?utm_source=amazon.com&utm_medium=footer"
                    className="nav_a"
                  >
                    Become a Delivery Driver
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://logistics.amazon.com/marketing?utm_source=amzn&utm_medium=footer&utm_campaign=home"
                    className="nav_a"
                  >
                    Start a package delivery business
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://advertising.amazon.com/?ref=ext_amzn_ftr"
                    className="nav_a"
                  >
                    Advertise Your Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/seller-account/mm-summary-page.html?ld=AZFooterSelfPublish&topic=200260520&ref_=footer_publishing"
                    className="nav_a"
                  >
                    Self-Publish with Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.amazon.com/b/?node=13853235011"
                    className="nav_a"
                  >
                    Host an Amazon Hub
                  </Link>
                </li>
                <li className="nav_last nav_a_carat">
                  <span className="nav_a_carat" aria-hidden="true">
                    ›
                  </span>
                  <Link
                    to="/b/?node=18190131011&ld=AZUSSOA-seemore&ref_=footer_seemore"
                    className="nav_a"
                  >
                    See More Ways to Make Money
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navFooterColSpacerInner navAccessibility"></div>
          <div className="navFooterLinkCol navAccessibility">
            <div className="navFooterColHead">
              <div className="head">Amazon Payment Products</div>
              <ul>
                <li className="nav_first">
                  <Link
                    to="/iss/credit/rewardscardmember?plattr=CBFOOT&ref_=footer_cbcc"
                    className="nav_a"
                  >
                    Amazon Rewards Visa Signature Cards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/credit/storecard/member?plattr=PLCCFOOT&ref_=footer_plcc"
                    className="nav_a"
                  >
                    Amazon Store Card
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/product/B084KP3NG6?plattr=SCFOOT&ref_=footer_ACB"
                    className="nav_a"
                  >
                    Amazon Secured Card
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dp/B07984JN3L?plattr=ACOMFO&ie=UTF-8"
                    className="nav_a"
                  >
                    Amazon Business Card
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/browse.html?node=16218619011&ref_=footer_swp"
                    className="nav_a"
                  >
                    Shop with Points
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/browse.html?node=3561432011&ref_=footer_ccmp"
                    className="nav_a"
                  >
                    Credit Card Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/browse.html?node=10232440011&ref_=footer_reload_us"
                    className="nav_a"
                  >
                    Reload Your Balance
                  </Link>
                </li>
                <li className="nav_last ">
                  <Link
                    to="/gp/browse.html?node=388305011&ref_=footer_tfx"
                    className="nav_a"
                  >
                    Amazon Currency Converter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navFooterColSpacerInner navAccessibility"></div>
          <div className="navFooterLinkCol navAccessibility">
            <div className="navFooterColHead">
              <div className="head">Let Us Help You</div>
              <ul>
                <li className="nav_first">
                  <Link
                    to="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid"
                    className="nav_a"
                  >
                    Amazon and COVID-19
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.amazon.com/gp/css/homepage.html?ref_=footer_ya"
                    className="nav_a"
                  >
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.amazon.com/gp/css/order-history?ref_=footer_yo"
                    className="nav_a"
                  >
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates"
                    className="nav_a"
                  >
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link to="/gp/prime?ref_=footer_prime" className="nav_a">
                    Amazon Prime
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                    className="nav_a"
                  >
                    Returns & Replacements
                  </Link>
                </li>
                <li>
                  <Link to="/hz/mycd/myx?ref_=footer_myk" className="nav_a">
                    Manage Your Content and Devices
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.amazon.com/your-product-safety-alerts?ref_=footer_bsx_ypsa"
                    className="nav_a"
                  >
                    Your Recalls and Product Safety Alerts
                  </Link>
                </li>
                <li className="nav_last ">
                  <Link
                    to="/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he"
                    className="nav_a"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-footer-line">
        <div className="navFooterLine navFooterLinkLine navFooterPadItemLine">
          <span>
            <div className="navFooterLine navFooterLogoLine">
              <Link
                className="btn2"
                onClick={() => {
                  scrollTop();
                }}
              >
                <img
                  className="logo ama"
                  src="https://cdn-sustainability.aboutamazon.com/b2/90/a2f326ae4fa6a73d650414216fcd/logo.svg"
                />
              </Link>

              <img
                className="logo"
                src="https://www.shutterstock.com/image-vector/united-states-america-flag-vector-260nw-1406928203.jpg"
              />

              {/* <Link 
                // aria-label="Amazon US Home"
               
              {/* > */}
                <div className="nav-logo-baseA nav-sprite">United States</div>
              {/* </Link> */}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;


