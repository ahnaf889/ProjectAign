import React from 'react';
import NavabarPart from '../Components/NavbarPart/NavabarPart';
import FooterPart from '../Components/FooterPart/FooterPart';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 max-w-[1440px] m-auto">
        <NavabarPart />
      </div>
    </>
  );
};

export default Navbar;
