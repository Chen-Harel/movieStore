import React from "react";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github.png";

let year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footerSection">
      <footer>
        Made by Chen Harel {year}&nbsp;
        <a href="https://www.linkedin.com/in/chen-harel123/" target={"_blank"} rel={"noreferrer"}>
          <img src={linkedin} alt={"linkedin-link"}></img>
        </a>
        &nbsp;
        <a href="https://github.com/Chen-Harel" target={"_blank"} rel={"noreferrer"}>
          <img src={github} alt={"github-link"}></img>
        </a>
      </footer>
      {/* Icon Attribution */}
      {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */}
    </div>
  );
};

export default Footer;
