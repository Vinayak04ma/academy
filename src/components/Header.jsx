import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header=()=>{
  const [nav, setNav] = useState(false);
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  const handleNav = () => {
    setNav(!nav);
  };
  

  const links=[
    {
      id:"1",
      name:"Home",
      link:"/"
    },
    {
      id:"2",
      name:"About",
      link:"/About"
    },
    

   
    {
      id:"5",
      name:"Our Mentors",
      link:"/Mentors"
    },
   
  
  ]
  return(
    <div className="px-[30px] py-[10px] mb-[3px] bg-white text-black shadow-2xl z-50 ">
      <div className="max-w-[1200px] mx-auto flex items-center font-semibold text-[18px]">
        <div className="w-[250px] font-bold text-[32px] text-[#A16207] ml-[40px]">
        AcademyWallah
        </div>
        <nav className="hidden md:flex list-none gap-10 ml-auto mr-[35
        px] text-[18px] text-black font-semibold ">
            
                
                 
                 {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded p-1 flex items-center gap-2"
            >
            <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          
          {
  isAuthenticated ? (
    <li className="cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded p-1 flex items-center gap-2">
      <Link to="/Profile">Profile</Link>
    </li>
  ) : (
    <div></div>
  )
}

 
           <li
              
              className="cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded p-1 flex items-center gap-2"
            >
              {
                isAuthenticated? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>: <button onClick={() => loginWithRedirect()}>Log In</button>
              }
            </li>
          </nav>
          {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden absolute right-[35px]'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
     

      {/* Mobile Navigation Menu */}

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-white ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] fixed duration-500  top-0 bottom-0 left-[-100%] z-50'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold black m-4'>AcademyWallah</h1>

        {/* Mobile Navigation Items */}
        {links.map((item) => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600'
          > 
       <Link to={item.link}>{item.name}</Link>
          
          </li>
        ))}
      </ul>

      </div>

    </div>

  );

}
export default Header;