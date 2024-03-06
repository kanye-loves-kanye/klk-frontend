import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='klk'>
          <h4>KanyeLovesKanye</h4>
          <h4>Contact Us </h4>
          <ul>
          <a href='https://www.facebook.com/yeezysupply/' target='_blank' rel='noopener noreferrer'>Facebook </a> &emsp;
          </ul>
          <ul>
          <a href='https://www.instagram.com/kanyewest/?hl=en' target='_blank' rel='noopener noreferrer'>Instagram</a> &emsp;          </ul>
          <ul> <NavLink to='/aboutus'>About Us</NavLink>  &emsp;  </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
