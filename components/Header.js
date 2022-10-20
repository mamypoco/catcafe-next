import { useState } from "react";
import cafeLogo from "../public/images/cocoa_logo8.jpg";
import {
   Nav,
   Navbar,
   NavItem,
   Collapse,
   NavbarToggler,
   NavbarBrand,
   NavLink,
} from "reactstrap";
// import { NavLink } from "react-router-dom";
// import Link from "next/link";
import Image from "next/image";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div className="site-header">
         <Navbar dark expand="md">
            <NavbarBrand className="ms-5" href="/">
               <Image
                  src={cafeLogo}
                  height="140"
                  width="300"
                  alt="A house with door, paw print and a coffee cup"
               />
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
               <Nav className="ms-auto" navbar>
                  <NavItem>
                     <NavLink className="nav-link" href="/">
                        Home
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" href="/aboutus">
                        About Us
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" href="/cafemenu">
                        Cafe Menu
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" href="/adoptcat">
                        Adopt A Cat
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" href="/contactus">
                        Contact
                     </NavLink>
                  </NavItem>
               </Nav>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default Header;
