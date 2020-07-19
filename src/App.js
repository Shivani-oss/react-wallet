import React from 'react';
import './App.css';
import Wallet from './components/Wallet';
import { ReactComponent as CrossIcon } from './icons/close.svg'
import { ReactComponent as MinusIcon } from './icons/minus.svg'
import { ReactComponent as CubeIcon } from './icons/cube.svg'
import {ReactComponent as HeaderIcon } from './icons/Group.svg'
import SideNavBar from './components/SideNavBar';
import Text from './components/Text'



function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand text="cySync" />
        <NavItem icon={<MinusIcon />} />
        <NavItem icon={<CubeIcon />} />
        <NavItem icon={<CrossIcon />} />
      </Navbar>
      <Text />
      <SideNavBar />
      <Wallet />
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

function NavbarBrand(props) {
  return(
    <>
      <div className="icon">
        <NavItem icon={<HeaderIcon />} />
      </div>
      <div className="text">
          {props.text}
      </div>
   </>
    
  )
}



export default App;
