import React from "react";
import "../styles/Footer.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { GiPhone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { BiWorld } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="allContactInfoBox">
        <div className="footerGrid">
          <div className="foooterHeader">
            <span className="footerImgBox">
              <AiOutlineHome size={20} />
            </span>
            <h3>Our Address</h3>
          </div>
          <div className="footerText">
            12A Cameroon street, <br />
            Off bourdillion road,
            <br /> Ikoyi, Lagos.
          </div>
        </div>
        {/*  */}
        <div className="footerGrid">
          <div className="foooterHeader">
            <span className="footerImgBox">
              <RiContactsLine size={20} />
            </span>
            <h3>Contact</h3>
          </div>
          <div className="footerText">
            You can reach us on:
            <br />
            <a href="tel:1234" className="footerContact">
              <GiPhone size={15} /> <p>(+234) 1000 20000</p>
            </a>
            <a href="mailTo:email@gmail.com" className="footerContact">
              <TfiEmail size={15} /> <p>Shoppify@gmail.com</p>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="footerGrid">
          <div className="foooterHeader">
            <span className="footerImgBox">
              <BiWorld size={20} />
            </span>
            <h3>Social Media</h3>
          </div>
          <div className="footerText">
            You can follow us on all social media platform
          </div>
          <div className="socialMediaIcon">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <IoLogoLinkedin size={20} />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="footerGrid">
          <div className="foooterHeader">
            <span className="footerImgBox">
              <FaHandsHelping size={20} />
            </span>
            <h3>Partner with us</h3>
          </div>
          <div className="footerText">
            <ul>
              <li>
                <Link>Sell products on Shoppify</Link>
                <Link>Sell on Shoppify Business</Link>
                <Link>Sell apps on Shoppify</Link>
                <Link>Become an affiliate</Link>
                <Link>Advertise your products</Link>
                <Link>Self-publish with us</Link>
                <Link>Host a Shoppify Hub</Link>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
      <p className="patent">All rights reserved &copy; Ugochukwu {date}</p>
    </div>
  );
}

export default Footer;
