import React, { Component } from 'react';
import "./index.css"; // Import CSS file

class FiltersSection extends Component {
  render() {
    return (
      <div className="filter">
          <div className="filter-options">
            <div className='customize-container'>
                <input type = "checkbox" />
                <label>CUSTOMIZABLE</label>
               
            </div>
            <div className="checkbox-options">
              <h4>Unselect all</h4>
              <label>
                <input type="checkbox" />
                Men
              </label>
              <label>
                <input type="checkbox" />
                Women
              </label>
              <label>
                <input type="checkbox" />
                Baby&Kids
              </label>
              
            </div>
           
            <div className="dropdown-options">
              <h4>IDEAL FOR:</h4>
              <select>
                <option value="All">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
              </select>
              <h4>OCCASION:</h4>
              <select>
                <option value="All">All</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="party">Party</option>
              </select>
              <h4>WORK:</h4>
              <select>
                <option value="All">All</option>
                <option value="office">Office</option>
                <option value="casual">Casual</option>
                <option value="party">Party</option>
              </select>
              <h4>FABRIC:</h4>
              <select>
                <option value="All">All</option>
                <option value="cotton">Cotton</option>
                <option value="polyester">Polyester</option>
                <option value="silk">Silk</option>
                
              </select>
              <h4>SEGMENT:</h4>
              <select>
                <option value="All">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="unisex">Unisex</option>
               
              </select>
              <h4>SUITABLE FOR:</h4>
              <select>
                <option value="All">All</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="party">Party</option>
               
              </select>
              <h4>RAW MATERIALS:</h4>
              <select>
                <option value="All">All</option>
                <option value="cotton">Cotton</option>
                <option value="polyester">Polyester</option>
                <option value="silk">Silk</option>
               
              </select>
              <h4>PATTERN:</h4>
              <select>
                <option value="All">All</option>
                <option value="solid">Solid</option>
                <option value="stripes">Stripes</option>
                <option value="floral">Floral</option>
               
              </select>
            
            </div>
          </div>
        
      </div>
    );
  }
}

export default FiltersSection;
