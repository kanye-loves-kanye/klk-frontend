import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-md-4'>
          <h4>KanyeLovesKanye, LLC</h4>
          <NavLink to='/aboutus'>About Us</NavLink>
        </div>
        <div className='col-md-4'>
          <h4>Legal</h4>
          <ul>
            <NavLink to='/privacy'>Privacy</NavLink>
          </ul>
          <ul>
            <NavLink to='/terms'>Terms of Use</NavLink>
          </ul>
        </div>
        <div className='col-md-4'>
          <h4>Contact Us </h4>
          <ul>
          <a href='https://www.facebook.com/yeezysupply/' target='_blank' rel='noopener noreferrer'>Facebook </a> &emsp;
          </ul>
          <ul>
          <a href='https://www.instagram.com/kanyewest/?hl=en' target='_blank' rel='noopener noreferrer'>Instagram</a> &emsp;          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;