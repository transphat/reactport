import React from "react";
import Picture from "../img/ProfilePic.png";
import './style.css';

function About() {
  return (
    <div className="customMargin">

      <div className="container col-xs-9 my-3 p-3 border border-dark rounded projects grayFusion">
        <h1 className="display-4 text-center text-sm-left">Meet Dung Tran</h1>
        <div className="container col-sm-3">
          <img src={Picture} alt="profile_image" className="img-fluid img-thumbnail figure-img rounded" />

        </div>
        <hr className="my-3" />

        <h4>I am</h4>
        <p>
        A passionate leader who strives to connects human, art and tech.  
      </p>
        <br />
        <h4>My Journey</h4>
        <p>
          Growing up I wanted to be an archaeologist. Digging through artifacts and discovering the past. I pursued art history with an interest in language. Much of my interest and passion lies in the past, searching for beginnings and ogigins. Coding is a abit different than my other passions because it's a tool which can build a community, a world that enhances our future.
      </p>
        <br />
        <h4></h4>
      </div>
    </div>
  )
}

export default About;