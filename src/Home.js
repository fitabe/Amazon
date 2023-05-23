import React from "react";
import "./Home.css";
import Product from "./Product";
import UncontrolledExample from "./UncontrolledExample";
import Footer from "./Footer";
import Nav1 from "./Nav1";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Nav1 />
        <UncontrolledExample />
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71FZBWkUf7L._SX3000_.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Product
            id="12321341"
            title="KitchenAid KSM150PSCU Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Contour Silver"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/711fcF6OfnL._AC_SS260_.jpg"
          />

          {/* <Product
            id="12321343"
            title="Fruit of the Loom Eversoft Fleece Hoodies, Pullover & Full Zip, Moisture Wicking & Breathable, Sizes S-4X"
            price={16}
            rating={5}
            image="https://m.media-amazon.com/images/I/71h2MZlZgLL._AC_UL480_FMwebp_QL65_.jpg"
          /> */}
          <Product
            id="12321345"
            title="XINQITE Women's Swing Loose T-Shirt Fit Comfy Casual Flowy Cute Swing Tunic Dress"
            price={4.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81RNdw632HL._AC_UL675_SR675,480_.jpg"
          />
          <Product
            id="49538094"
            title="LG 75-Inch Class UQ9000 Series Alexa  60Hz Refresh Rate, AI-Powered 4K, Cloud Gaming, 2023 )"
            price={1159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/A17xICca7-L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            className="iphone"
            id="4903852"
            title="Apple iPhone 14 Pro Max, 256GB, Deep Purple - Unlocked (Renewed)"
            price={1254.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51iJx7YWDOL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="4903850"
            title="Apple Watch Series 8 (GPS, 41MM) - Starlight Aluminum Case with Starlight Sport Band (Renewed)"
            price={499.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71uOgDy40BL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black"
            price={1812.06}
            rating={4}
            image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row1">
          <Product
            id="90829332"
            title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black"
            price={1812.06}
            rating={4}
            image="https://m.media-amazon.com/images/I/617ex-oSHJL._SX3000_.jpg"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
