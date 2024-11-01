/* eslint-disable no-undef */

import { useState } from "react";
import "./main_components.css";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiArrowDropUpLine } from "react-icons/ri";

function Main_bar(){
  const [visible,setVisible] = useState(false)
  const [login,setLogin] = useState(false)
    const handleVisible = () => {
      setVisible((prevVisible) => !prevVisible);

    }
    const handlelogin = () => {
          setLogin(!login)
   };
  return (
    <div className="main_container">
      <div className="side_bar">
        <img width={200}  height={40} src="https://code-pen-sepia.vercel.app/assets/codepenlogo-Cz-WsP-X.webp" alt="" />
        <div className="State_conding">
          <h1 >State coding</h1>
        </div>
        <div className="home_icon">
          <i className="fahome_icon"><FaHome /></i>
          <h1 id="Home_heading">Home</h1>
        </div>
      </div>
      <div className="main_content">
        <div className="input_search">
          <div className="input_box">
            <i className="Search_input_icon">
              <CiSearch />
            </i>
            <input placeholder="Search here..." type="text" />
          </div>
          <div  onClick={handleVisible}   className="button_box">
            <i className="Search_input_icon">
              {visible ? <IoIosArrowDown /> : <RiArrowDropUpLine />
              }
            </i>
          </div>
        </div>
        {visible && <div className="visible">
           <h4>Project</h4>
           <h4>Collections</h4>
           <h4>Profile</h4>
           <h4>Sign out</h4>
          </div> }
        <div className="images_container">
          <img
            width={120}
            src="https://code-pen-sepia.vercel.app/assets/codepenlogo-Cz-WsP-X.webp"
            alt="Codepen Logo"
          />
        </div>
        <div className="form_container">
          <form>
            <label>Email</label>
            <input type="text" placeholder="Email..." />

            <label>Password</label>
            <input type="text" placeholder="Password" />
            <button className="Sign_up" type="submit">
              {login ? "Sign Up" : "Login"} 
            </button>
            <div className="login">
              <p style={{ opacity: "0.5" }}> {login ? "Don't have an account?" :"Already have an account? " }</p>
              <p  onClick={handlelogin} className="Login_here">{login ? "Login here" : "Sign up"}</p>
            </div>
            <button className="google-signin-btn">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII="
                alt="Google logo"
                className="google-logo"
              />
              Sign in with Google
            </button>
            <button type="button" className="github-signin-btn">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
                className="github-logo"
              />
              Sign in with GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main_bar;
