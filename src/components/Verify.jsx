import React from "react";
import "../styles/Verify.css";
import Logo from "../assets/logo2.png";
import Vector from '../assets/Vector.svg';
import Group from '../assets/Group.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Verify() {
  return (
    <div className="verify">
      <div className="head">
        <div className="logo">
          <img src={Logo} alt="logo2" />
          <h2>Ramaera Industries</h2>     
        </div>
        <div className="lastHeader">
          <img src={Vector} alt="bell" />
          <span>English(UK)</span>
          <ArrowDropDownIcon />
        </div>     
      </div>
      <hr className="line"/>
      <div className="body">
      <h2>Welcome <span className="highlight">Ramaera</span>, Please enter the code sent to your registered mail ID</h2>
      <img src={Group} alt="mail"/>
      <button>Open</button>
      </div>
    </div>
  );
}

export default Verify;
