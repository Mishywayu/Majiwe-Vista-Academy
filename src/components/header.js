import React from 'react'

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div className='bg-black'>
      <nav className='flex justify-between items-center bg-blue-700 bg-opacity-70 p-4'>
        {/* LOGO */}
        <img src='/images/main-logo.png' alt='logo' className='w-32 h-34' />

        {/* HAMBURGER MENU BUTTON FOR SMALL SCREENS */}
        {/* <button>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button> */}

        {/* MENU ITEMS */}
          <ul className='flex space-x-4 pr-5 text-white'>
            <li><a href='/'>HOME</a></li>
            <li><a href='/about'>ABOUT US</a></li>
            <li><a href='/junior'>JUNIOR SCHOOL</a></li>
            <li><a href='/senior'>SENIOR SCHOOL</a></li>
            <li><a href='/admissions'>ADMISSIONS</a></li>
            <li><a href='/careers'>CAREERS</a></li>
            <li><a href='/contact'>CONTACT US</a></li>
        </ul>
      </nav>
    </div>
  );
}
