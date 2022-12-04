import React from "react";
import ResumeDownload from "../assets/Jon-Kelly-resume.pdf";

function Resume() {
  return (
    <div className="border border-black border-solid mb-8">
    <div className="border white-border font-light border-solid rounded-sm pt-12 pb-16 px-8 flex flex-col items-center blkBackground">
      <h1 className="text-4xl text-white mb-3 text-center">Resume</h1>
      <p className="text-white text-2xl text-center red-text mt-6">Schooling</p>
      <p className="text-white text-lg text-center">
        Degree in Letters (yes, it's a real degree) from the University of Oklahoma
        2011
      </p>
      <p className="text-white text-lg text-center">
        Full stack development bootcamp from Southern Methodist University 2022
      </p>
      <p className="text-white text-2xl mt-3 text-center blue-text">Skills</p>
      <div class="grid grid-cols-2 text-white text-center text-lg px-72">
      <p className="">
        Full Stack development
      </p>
      <p className="">
        HTML/CSS
      </p>
      <p className="">
        JavaScript
      </p>
      <p className="">
        React
      </p>
      <p className="">
        SQL/NoSQL
      </p>
      <p className="">
        GraphQL/Rest
      </p>
      </div>
      <p className="text-white text-2xl mt-3 text-center yellow-text">Job History</p>
      <p className="text-white text-lg text-center">
      Sales Contact Center Sales Specialist at PennyMac Loan Services 2020-2022
      </p>
      <p className="text-white text-lg text-center">
        Warehouse Manager at Oz Fulfillment 2015-2020
      </p>
      <p className="text-white text-lg text-center">
        Inside Sales Team Lead at ID Systems 2013-2015
      </p>
      <p className="text-white text-lg text-center">
        Sales Manager at A Gift for Business 2011-2013
      </p>
      <a href={ResumeDownload} download="Jon-Kelly-Resume" target='_blank' rel="noopener noreferrer">
    <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border white-border-sm hover:border-transparent rounded content-center mt-10">
  Download Resume
</button>
</a>
    </div>
    </div>
  );
}


export default Resume