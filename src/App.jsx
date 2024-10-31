import React from 'react';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <>
      <div className="bg-auth_font_color navbarEdit">
        <Navbar />
      </div>
      <div className="bg-auth_bg_color">
        <Footer />
      </div>
    </>
  );
};

export default App;
