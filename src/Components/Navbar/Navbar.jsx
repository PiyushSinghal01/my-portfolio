import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from "../../assets/theme_pattern.svg"


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [navToggle, setNavToggle] = useState("");


  return (
    <div id='home' className='navbar'>
      <div className="nav-title">
        <h1>Piyush</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <img src={logo} alt="logo" /> */}
      <img src={menu_open} onClick={() => setNavToggle("active")} alt="" className='nav-mob-open' />
      <ul className={`nav-menu ${navToggle}`}>
      <img src={menu_close} onClick={() => setNavToggle("")} alt="" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} />:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("About")}>About Me</p></AnchorLink>{menu=="About"?<img src={underline} />:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("Services")}>Services</p></AnchorLink>{menu=="Services"?<img src={underline} />:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("Portfolio")}>Work</p></AnchorLink>{menu=="Portfolio"?<img src={underline} />:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu=="Contact"?<img src={underline} />:""}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar