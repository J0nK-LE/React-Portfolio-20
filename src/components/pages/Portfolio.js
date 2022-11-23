import React from 'react';
import DoomedDrinks from "../assets/Doomed-Drinks-screenshot.png"
import Breitweiser from '../assets/breitweiser-homepage.png'
import Keystone from '../assets/KeystoneScreenshot.png'
import Employee from '../assets/employee-manager-demo.gif'
import Regexplination from '../assets/regexplination.jpg'
import Teambuilder from '../assets/teambuilder.png'

export default function Portfolio() {
  return (
    <div className="shadow-lg border blue-border font-light border-solid rounded-sm py-12 px-8 mb-8 blkBackground">
      <h1 className="text-2xl md:text-4xl blue-text mb-3 text-center">Portfolio</h1>
      <div class="grid grid-cols-2 gap-4 text-white mx-auto">
      <img className="w-80 mx-auto my-auto" src={Keystone} alt="Keystone Project" />
      <img className="w-80 my-auto mx-auto" src={DoomedDrinks} alt="Doomed Drinks" />
      <img className="w-80 mx-auto my-auto" src={Breitweiser} alt="Breitweiser Project" />
      <img className="w-80 mx-auto my-auto" src={Regexplination} alt="Regexplination" />
      <img className="w-80 mx-auto my-auto" src={Employee} alt="Employee Manager" />
      <img className="w-80 mx-auto my-auto" src={Teambuilder} alt="Teambuilder" />
</div>
    </div>
  );
}
