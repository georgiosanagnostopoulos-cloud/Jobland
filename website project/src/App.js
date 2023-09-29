import React from 'react';
import Example from './components/navbar';
import SearchComponent from './components/searchbar';
import Footer from './components/footerofwebsite';
import GoogleMaps from './components/googlemapsearchbox';
const App = () => {
  return (
    <div>
      <Example />
      <SearchComponent/>
      <GoogleMaps />
      <hr />
      <Footer />
            </div>
  )
}
export default App; 
