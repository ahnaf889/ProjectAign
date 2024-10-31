import React from 'react';

const Navabar = () => {
  return (
    <>
      <div>
        <p className="text-white text-2xl font-bold leading-7">Λᄂ-ΛMIП</p>
      </div>
      <div>
        <ul className="flex gap-x-9 text-white font-medium text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer text-auth_orenge_color">About Me</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <button className="font-bold text-xl px-12 py-3 rounded-full bg-white navBtn text-[#461959]">
          Hire me
        </button>
      </div>
    </>
  );
};

export default Navabar;
