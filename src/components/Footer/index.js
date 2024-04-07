// Footer Component
import "./index.css"
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
