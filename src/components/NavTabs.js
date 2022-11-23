import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 blkBackground mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <div
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          
        >
Jon Kelly        </div>
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
        >
          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div
        className="lg:flex flex-grow items-center"
        id="example-navbar-warning"
      >
    <ul className="flex flex-col lg:flex-row list-none ml-auto">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug red-text hover:opacity-75">
                    About Me
                  </span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug blue-text hover:opacity-75">
          Portfolio
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
             <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug yellow-text hover:opacity-75">
                  Contact Me
                  </span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
            <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  Resume
                  </span>
        </a>
      </li>
    </ul>
       </div>
       </div>
     </nav>
  );
}

export default NavTabs;
