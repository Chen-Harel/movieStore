import React from "react";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github.png";

let year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footerSection">
      <footer>
        Made by Chen Harel {year}{" "}
        <a href="https://www.linkedin.com/in/chen-harel123/" target={"_blank"}>
          <img src={linkedin}></img>
        </a>
        &nbsp;
        <a href="https://github.com/Chen-Harel" target={"_blank"}>
          <img src={github}></img>
        </a>
      </footer>
      {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */}
    </div>
  );
};

export default Footer;
