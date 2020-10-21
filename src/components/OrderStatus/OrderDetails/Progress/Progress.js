import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHome,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import classes from './Progress.module.css';

const Progress = ({type}) => {
    const pType = type === 'in progress' ? 'progress' : type;
    let statusBar = null;
    const classess = `${classes.Progress} ${classes[pType]}` 
    switch(pType) {
        case "ordered":
            statusBar = (
                <div className={classes.StatusBar}>
                    <div className={classess}>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className={classes.Progress}>
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <div className={classes.Progress}>
                        <FontAwesomeIcon
                        icon={faIdCard}
                        />
                    </div>
                    </div>
            );
            break;
            case "progress":
                statusBar = (
                    <div className={classes.StatusBar}>
                    <div className={classess}>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className={classess}>
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <div className={classes.Progress}>
                        <FontAwesomeIcon
                        icon={faIdCard}
                        />
                    </div>
                    </div>
            );
            break;
            case "delivered":
                statusBar = (
                    <div className={classes.StatusBar}>
                    <div className={classess}>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className={classess}>
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <div className={classess}>
                        <FontAwesomeIcon
                        icon={faIdCard}
                        />
                    </div>
                    </div>
            );
            break;
        default: 
        statusBar = null;
    }
    return statusBar;
}

export default Progress
