import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import './navbar.css'
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    });
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Sell your services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          idk
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium logo text-xl text-pink-800"
        >
          Jobland
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:inline-block flex items-center space-x-2">
          <Button variant="gradient" size="sm" className="inline-buttons">
            <span>Sign In</span>
          </Button>
          <Button variant="gradient" size="sm" className="inline-buttons">
            <span>Sign Up</span>
          </Button>
        </div>
        <IconButton
         variant="text"
         className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
         ripple={false}
         onClick={() => setOpenNav(!openNav)}
       >
         {openNav ? (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             className="h-6 w-6"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M6 18L18 6M6 6l12 12"
             />
           </svg>
         ) : (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4 6h16M4 12h16M4 18h16"
             />
           </svg>
         )}
       </IconButton>
     </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign In</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign Up</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
