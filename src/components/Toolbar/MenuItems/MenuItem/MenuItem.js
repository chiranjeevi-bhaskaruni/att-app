import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css'
const MenuItem = ({link, title}) => {
    return (
        <div className={classes.MenuItem}>
            <NavLink to={link} activeClassName={classes.MenuItem}>
                Order Status
            </NavLink>
        </div>
    )
}

export default MenuItem
