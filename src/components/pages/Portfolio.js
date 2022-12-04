import React, { useState } from "react";
import DoomedDrinks from "../assets/Doomed-Drinks-screenshot.png";
import Breitweiser from "../assets/breitweiser-homepage.png";
import Keystone from "../assets/KeystoneScreenshot.png";
import Employee from "../assets/employee-manager-demo.gif";
import Regexplination from "../assets/regexplination.jpg";
import Teambuilder from "../assets/teambuilder.png";

function Portfolio() {
  const [KeyHovering, setKeyHovering] = useState(false);
  const [DoomHovering, setDoomHovering] = useState(false);
  const [BreitHovering, setBreitHovering] = useState(false);
  const [RegexHovering, setRegexHovering] = useState(false);
  const [EmpHovering, setEmpHovering] = useState(false);
  const [TeamHovering, setTeamHovering] = useState(false);

  const handleMouseOverKey = () => {
    setKeyHovering(true);
  };

  const handleMouseOutKey = () => {
    setKeyHovering(false);
  };

  const handleMouseOverDoom = () => {
    setDoomHovering(true);
  };

  const handleMouseOutDoom = () => {
    setDoomHovering(false);
  };

  const handleMouseOverBreit = () => {
    setBreitHovering(true);
  };

  const handleMouseOutBreit = () => {
    setBreitHovering(false);
  };

  const handleMouseOverRegex = () => {
    setRegexHovering(true);
  };

  const handleMouseOutRegex = () => {
    setRegexHovering(false);
  };

  const handleMouseOverEmp = () => {
    setEmpHovering(true);
  };

  const handleMouseOutEmp = () => {
    setEmpHovering(false);
  };

  const handleMouseOverTeam = () => {
    setTeamHovering(true);
  };

  const handleMouseOutTeam = () => {
    setTeamHovering(false);
  };

  return (
    <div className="shadow-lg border blue-border font-light border-solid rounded-sm py-12 px-8 mb-8 blkBackground">
      <h1 className="text-2xl md:text-4xl blue-text mb-3 text-center">
        Portfolio
      </h1>
      <div class="grid grid-cols-2 gap-4 text-white mx-auto">
        <a
          href="https://github.com/J0nK-LE/keystone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverKey}
            onMouseOut={handleMouseOutKey}
            className="w-80 mx-auto my-auto"
            src={Keystone}
            alt="Keystone Project"
          />
          {KeyHovering && (
            <div>
              <h3 className="text-center red-text">Keystone Properties</h3>
              <div className="text-center">
                Welcome to the future of home purchasing. Using web3
                technologies Keystone Properties allows users to buy and sell
                physical properties using NFTs as the "deed" that changes hands.
                Keystone can mint the NFTs locally after ownership has been
                proven and then allows those homes to be put on the market and
                purchased using cryptocurrency. Non users can browse the site,
                but until a wallet is attached will not be able to purchase
                anything. Keystone even holds the properties and the fund while
                it is in escrow to ensure both parties will get what they want.
              </div>
            </div>
          )}
        </a>
        <a
          href="https://fe011001.github.io/Doomed-Drinks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverDoom}
            onMouseOut={handleMouseOutDoom}
            className="w-80 my-auto mx-auto"
            src={DoomedDrinks}
            alt="Doomed Drinks"
          />
          {DoomHovering && (
            <div>
              <h3 className="text-center red-text">Doomed Drinks</h3>
              <div className="text-center">
                Finding a perfect pairing elixir to mesh with the formidable
                lingering doom of the impending asteroids. Our group majority
                has a history in the mixing of elixirs. As a species it has
                always been a curiosity as to the reflection of ourselves within
                our skies. As we continue to swing in our planet among the stars
                we realize that pairing food and drink is too terrestrial. We
                have found that the best pairing's will be those paired with the
                imminent lingering doom of potential life extinguishing
                ASTEROIDS.
              </div>
            </div>
          )}
        </a>
        <a
          href="https://damp-badlands-29028.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverBreit}
            onMouseOut={handleMouseOutBreit}
            className="w-80 mx-auto my-auto"
            src={Breitweiser}
            alt="Breitweiser Project"
          />
          {BreitHovering && (
            <div>
              <h3 className="text-center blue-text">Breitwieser Project</h3>
              <div className="text-center">
                Do you have a famous work of art acquired by any means? Need a
                place to sell it? No questions asked! Look no further!
                Breitwieser Project is here to assist your transaction.
                ECommerce site, helping famous arts to be handed to others
                safely and swiftly!
                <div>
                  TO ACCESS THE SITE - CLICK ON THE PICTURE OF THE ALLEY AND
                  TYPE THE SECRET CODE "PASSWORD" TO GAIN ACCESS
                </div>
              </div>
            </div>
          )}
        </a>
        <a
          href="https://gist.github.com/J0nK-LE/5d4b602e4c55cc5c309f5c3ec1a666f4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverRegex}
            onMouseOut={handleMouseOutRegex}
            className="w-80 mx-auto my-auto"
            src={Regexplination}
            alt="Regexplination"
          />
          {RegexHovering && (
            <div>
              <h3 className="text-center blue-text">Matching URL REGEX</h3>
              <div className="text-center">
                This GitHub Gist goes into detailed explanation of how the REGEX
                that is commonly used to find URLS works. Goes into detail about
                the structure of the regex as well as all the parts that make up
                Regexes in general.
              </div>
            </div>
          )}
        </a>
        <a
          href="https://github.com/J0nK-LE/challenge12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverEmp}
            onMouseOut={handleMouseOutEmp}
            className="w-80 mx-auto my-auto"
            src={Employee}
            alt="Employee Manager"
          />
          {EmpHovering && (
            <div>
              <h3 className="text-center yellow-text">Employee Manager's</h3>
              <div className="text-center">
                Keeps track of employee information, including names, job title,
                department, salary and who their manager is all through the
                computer terminal. Employees, their role in the company, and
                even the departments can be modified as well. All tables are
                held and changed using SQL on the backend.
              </div>
            </div>
          )}
        </a>
        <a
          href="https://github.com/J0nK-LE/challenge10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            onMouseOver={handleMouseOverTeam}
            onMouseOut={handleMouseOutTeam}
            className="w-80 mx-auto my-auto"
            src={Teambuilder}
            alt="Teambuilder"
          />
          {TeamHovering && (
            <div>
              <h3 className="text-center yellow-text">
                Team Profile Generator
              </h3>
              <div className="text-center">
                Using the terminal to ask questions about the teams composition
                the app then creates a webpage about a team of workers by
                generating the HTML based on the answers.
              </div>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
