import classes from './HamburgerMenu.module.css'
import React, { useState } from 'react';
import Hamburger from '../../../assets/hamburger.jpg'
import MenuItems from '../MenuItems/MenuItems';

const HamburgerMenu = () => {
    const [ShowMenu, setShowMenu] = useState(false);
    const showMenu = () => {
        const menuHide = !ShowMenu;
        setShowMenu(menuHide);
    }
    let menu = null;
    if (ShowMenu) {
      menu = (
        <div className={classes.Menu}>
          <MenuItems onClick={showMenu}/>
        </div>
      );
    }
    return (
        <div className={classes.HamburgerMenu}>
        <img src={Hamburger} alt="Hamburger" width="45px" height="45px" 
        onClick={showMenu}/>
             {menu}
        </div>
    )
}

export default HamburgerMenu
