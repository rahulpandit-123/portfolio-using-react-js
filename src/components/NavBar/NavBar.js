import React, { useState } from "react";
import './NavBar.css';
import logo from '../../assets/logo r.jpg';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const NavBar = () => {
    const[showmenu,setShowMenu] = useState(false);
    return (
        <nav className="NavBar"> 
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50}  duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50}  className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50}   className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior :'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </button>
            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showmenu)} />
            <div className="navMenu" style={{display: showmenu? 'flex':'none'}}>
                
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50}  className="ListItem"onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50}   className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50}   className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav> 
    );
}

export default NavBar;
