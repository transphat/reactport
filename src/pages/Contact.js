import React from "react";
import LinkedIn from "../img/icons/lin.png";
import GitHub from "../img/icons/gh.png";
import Email from "../img/icons/mail.png";
import Phone from "../img/icons/phone.png";
import './style.css';

function Contact() {
  return (
    <div>
      <div className="container col-xl-6 my-3 p-3 border border-dark rounded grayFusion stretched">
        <div className="centerDiv">
        <h1 className="display-4 text-center"><span>Let's connect:</span></h1>
        <ul>
          <li className="spread"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/dung-tran-37821713a/"><img src={LinkedIn} alt="linkedin-logo" height="20" width="20" /> LinkedIn</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="https://github.com/transphat"><img src={GitHub} alt="github-logo" height="20" width="20" /> Github</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="mailto: trankhadung@gmail.com"><img src={Email} alt="email-logo" height="20" width="20" /> Email</a></li>
          <li className="spread"><a rel="noreferrer" target="_blank" href="tel: 9176988041"><img src={Phone} alt="phono-icon" height="20" width="20" /> Phone (123)-456-7890</a></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;