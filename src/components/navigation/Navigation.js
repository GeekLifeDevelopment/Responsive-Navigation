import React from "react"
import { useState } from "react"
import { NavigationStyles } from "./styles/NavigationStyles"
import FactoryCatLogo from "../../images/factory-cat-nav-logo.png"
import { Helmet } from "react-helmet"

const Navigation = () => {
  const [marginToggle, setToggle] = useState("-325px")

  function toggleMenu() {
    if (marginToggle === "-325px") {
      setToggle("0")
    } else setToggle("-325px")
  }
  return (
    <NavigationStyles>
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
        </Helmet>
        <div id="nav-container">
          <div id="logo">
            <img src={FactoryCatLogo} alt="factory-cat-logo" />
          </div>
          <div id="main-nav">
            <p>Home</p>
            <p>Products</p>
            <p>Service</p>
            <p>Media</p>
          </div>
          <div id="social-nav">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div onClick={toggleMenu} id="responsive-bars">
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <div style={{ marginLeft: marginToggle }} id="mobile-navigation">
          <p>Home</p>
          <p>Products</p>
          <p>Service</p>
          <p>Media</p>
          <div id="social-nav-mobile">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </>
    </NavigationStyles>
  )
}

export default Navigation
