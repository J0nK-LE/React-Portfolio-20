import React from "react";
import avatar from "../assets/SelfAvatar2.gif";

export default function Home() {
  return (
    <div className="shadow-lg border red-border font-light border-solid rounded-sm py-12 px-8 mb-8 blkBackground">
      <h1 className="text-2xl md:text-4xl red-text mb-3 text-center">
        About Jon Kelly
      </h1>
      <img className="w-80 mx-auto my-4" src={avatar} alt="Self Avatar" />

      <p className="text-white text-lg">
        Hello, my name is Jon Kelly. Fullstack developer and jack of not quite all trades, but certainly a lot of them. Professionally I've managed a warehouse, sold items from corporate clothing to Atlantic city boardwalk fudge, and have been an inside sales leader for the mortgage industry and the forklift equipment industry. Personally I've hosted podcasts and done stand up comedy. Im finally ready to bring it all together to create things the like of which have never been seen.
      </p>
    </div>
  );
}
