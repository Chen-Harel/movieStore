import React from "react";
import Walt_Disney_About from "../adminTools/icons/Walt_Disney_About.jpg";

const About = () => {
  return (
    <div>
      <br />
      <hr />
      <div className="center-items">
        <img src={Walt_Disney_About} alt="Disney" />
        <div>
          <h1>Disney History</h1>
          <img
            src="https://d23.com/app/uploads/2022/07/giphy-19.gif"
            alt="First Mickey Mouse Short"
          />
          <p className="disney-history">
            Walt Disney arrived in California in the summer of 1923 with a lot
            of hopes but little else. He had made a cartoon in Kansas City about
            a little girl in a cartoon world, called Alice's Wonderland, and he
            decided that he could use it as his “pilot” film to sell a series of
            these “Alice Comedies” to a distributor. Soon after arriving in
            California, he was successful. A distributor in New York, M. J.
            Winkler, contracted to distribute the Alice Comedies on October 16,
            1923, and this date became the start of the Disney company.
            Originally known as the Disney Brothers Cartoon Studio, with Walt
            Disney and his brother, Roy, as equal partners, the company soon
            changed its name, at Roy's suggestion, to the Walt Disney Studio.
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
