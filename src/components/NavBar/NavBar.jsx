import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "Profile" },
  ];

  return (
    <nav className="text-black ">
      <div className="md:hidden text-2xl bg-yellow-800" onClick={() => setOpen(!open)}>
        {
          open === true? <RxCross2 ></RxCross2> : <HiOutlineMenuAlt1 ></HiOutlineMenuAlt1>
        }
      
      </div>
      <ul className={`md:flex duration-1000
      ml-8
      md:ml-0
        absolute md:static
        ${open ? 'top-6':'-top-64'}
        bg-yellow-800 p-6 shadow-lg
        rounded-xl
        
        
        `}>
        {routes.map((route) =><Link key={route.id} route={route}></Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;
