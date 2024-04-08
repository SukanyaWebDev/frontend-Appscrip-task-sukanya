import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import FiltersSection  from './components/FiltersSection'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
         <Helmet>
          <title>Product Showcase Web Application</title>
          <meta name="description" content="Our project is a web application that displays a curated collection of products to users. It utilizes React for the frontend and Node.js with Express for the backend. Product data is stored locally using SQLite, and fetched from an external API to populate the database. While our filtering system is static, users can still browse through products seamlessly, making discovery effortless and enjoyable." />
        </Helmet>
        <Header/>
          <div className='main-heading'> 
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
       <div className='filters-top-section'>
        <button className='filter-button'>Filter</button>
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
