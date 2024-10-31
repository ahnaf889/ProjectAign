import React from 'react';
import BannerLeft from '../../assets/BannerLeft.png';
import {PiFacebookLogoBold} from 'react-icons/pi';
import {FaInstagram} from 'react-icons/fa';
import {VscGithub} from 'react-icons/vsc';
import {TiSocialLinkedinCircular} from 'react-icons/ti';

const FooterPart = () => {
  return (
    <>
      <div className="w-[60%]">
        <h3 className="text-[30px] font-semibold text-auth_orenge_color">
          Hi, It's me
        </h3>

        <h1 className="text-[60px] font-Chakra font-bold text-white">
          MD AHNAF JUNIOR
        </h1>

        <p className="text-[35px] font-semibold text-white mb-3">
          And I'm a
          <span className="text-auth_orenge_color">Full Stack Developer</span>
        </p>

        <p className="text-[20px] font-normal text-white w-[574px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
          ullam molestias autem deleniti iure earum!
        </p>

        <ul className=" flex gap-x-9 items-center text-white text-4xl mb-8">
          <li className="cursor-pointer">
            <a
              href="https://www.facebook.com/ahnaf.satkhira"
              target="_"
            >
              {' '}
              <PiFacebookLogoBold />
            </a>
          </li>
          <li className="cursor-pointer text-[44px]">
            <TiSocialLinkedinCircular />
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.instagram.com/ahnaf_dev"
              target="_"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://github.com/ahnaf889"
              target="_"
            >
              <VscGithub />
            </a>
          </li>
        </ul>

        <button className="px-20 py-4 text-white font-semibold text-lg rounded-full bg-auth_orenge_color">
          Download CV
        </button>
      </div>
      <div className="w-[40%]">
        <div>
          <picture>
            <img
              src={BannerLeft}
              alt={BannerLeft}
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default FooterPart;
