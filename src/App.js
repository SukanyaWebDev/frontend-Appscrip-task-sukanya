import React, { Component } from 'react';

import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import FiltersSection  from './components/FiltersSection'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
          <div className='main-heading'> 
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
       <div className='filters-top-section'>
        <p>Filter</p>
        <div className="recommendations">
        <label htmlFor="recommended-dropdown">RECOMMENDATION</label>
          <select id="recommended-dropdown" className='drop-down'>
            <option>All</option>
            <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE:HIGHT TO LOW </option>
              <option>PRICE:LOW TO HIGH</option>
              
          </select>
        </div>
      
        </div>
       <div className='bottom-container'>
        <div className='left-container'>< FiltersSection/> </div>
        <div className='right-container'> <ProductGrid /></div>
       </div>
        
        <Footer />
      </div>
     
    );
  }
}

export default App;
