/* eslint-disable indent */
import React from 'react';
import logoFooter from '../assets/Minegram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#09264c] py-14 px-4 md:px-[100px] border-t border-white text-white">
      <div className="flex flex-wrap flex-row justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Company</h2>
          <Link to="/about-us">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/partner-with-us">Partner with us</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Resources</h2>
          <Link to="/blog">Blog</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
          <Link to="/why-tozilla">Why Tozilla</Link>
          <Link to="/customer-stories">Customer Stories</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Legal</h2>
          <Link to="/terms-of-use">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-6">
            <img src={logoFooter} alt="logo" />
          </div>
          <p className="text-white leading-[24px]">
            Subscribe to our newsletter
          </p>
          <form>
            <div className=" h-[44px] rounded-[8px] flex">
              <input
                type="email"
                placeholder="Enter email address"
                className=" flex-1  h-[44px] flex items-center text-[sm] leading-[20px] mt-3 pl-2 outline-none bg-white border border-solid border-l-[#909090] border-t-[#909090] border-b-[#909090] rounded-l-lg rounded-r-none font-normal   focus:outline-none "
              />
              <button
                type="submit"
                className="flex-1 px-2  h-[44px] flex justify-center items-center text-sm  border border-[#FF6C00]  font-medium leading-[20px] text-white bg-[#FF6C00]  mt-3 rounded-r-lg text-[14px] text-center  hover:bg-[#FF9D55]  "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative mt-8 flex justify-between items-center">
        <div className=" hidden sm:block bg-[#EAECF0] h-[2px] flex-1"></div>
        <p
          className="text-[#F7F7F7] flex-1 font-normal  text-center relative w-fit"
          style={{
            zIndex: 10,
          }}
        >
          &copy; 2022 Minergram. All rights reserverd.
        </p>
        <div className="bg-[#EAECF0] h-[2px] flex-1 hidden sm:block"></div>
      </div>
    </footer>
  );
};

export default Footer;
