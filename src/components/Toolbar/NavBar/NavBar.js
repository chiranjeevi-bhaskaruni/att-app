import classes from './NavBar.module.css';
import React from 'react';
import MenuItems from '../MenuItems/MenuItems';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
        <h4 style={{color: 'white'}}>ATT</h4>
        <MenuItems />
        </div>
    )
}

export default NavBar