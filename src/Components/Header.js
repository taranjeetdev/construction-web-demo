import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  const items = [
    { path: '/', name: 'HOME' },
    { path: '/services', name: 'SERVICES'},
    { path: '/projects', name: 'PROJECTS' },
    { path: '/about', name: 'ABOUT US' },
    { path: '/contact', name: 'CONTACT US' }
  ];

  const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     // Check if click is outside of the menu
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsShow(false); // Hide the menu
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   // Cleanup function to remove event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isShow]);

  const [isScroll,setIsScroll] = useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 100){
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScroll ? 'header header-bg' : 'header'} >
      <Link to="/" onClick={() => setIsShow(false)}>
        <h1>Construction Corp.</h1>
      </Link>
      <ul className={isShow ? 'nav-menu d-flex gap-5' : 'nav-menu active-menu d-flex gap-5'}>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item?.path} onClick={() => setIsShow(false)}>
              {item?.name}
            </Link>
          </li>
        ))}

        <button className='project-btn'>START YOUR PROJECT</button>
      </ul>
      <div className='bar'>
        {isShow ?
          <FaTimes size={20} color='white' onClick={handleClick} />
          :
          <FaBars size={20} color='white' onClick={handleClick} />
        }
      </div>
    </div>
  )
}

export default Header
