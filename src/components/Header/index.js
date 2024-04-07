// Header Component

import "./index.css"
import { IoLogoSlack } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top-section">
            <IoLogoSlack  className="logo-icon"/>
            <h1 className="logo">LOGO</h1>
            <ul className="list-of-icons">
                <li><CiSearch className = "icons"/></li>
                <li><CiHeart className = "icons"/></li>
                <li><RiShoppingBagLine className = "icons"/></li>
                <li><IoIosContact className = "icons"/></li>
                <select>
                    <option value = "ENG"selected>ENG</option>
                    <option value = "HINDI">HINDI</option>
                    <option value = "TELUGU">TELUGU</option>
                </select>

            </ul>
        </div>
        <nav>
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
