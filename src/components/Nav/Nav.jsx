import {NavLink} from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
    return (<nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? classes.active : ""}>👻
                    Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messages" className={navData => navData.isActive ? classes.active : ""}>💬
                    Messages</NavLink>
            </div>
        <div className={classes.item}>
            {/*<a href="#" className={classes.item}>Settings</a>*/}
            <NavLink to="/users" className={navData => navData.isActive ? classes.active : ""}>🔍 Find friends</NavLink>
        </div>
            <div className={classes.item}>
                {/*<a href="#" className={classes.item}>News</a>*/}
                <NavLink to="/news" className={navData => navData.isActive ? classes.active : ""}>🚨 News</NavLink>

            </div>
            <div className={classes.item}>
                {/*<a href="#" className={classes.item}>Music</a>*/}
                <NavLink to="/music" className={navData => navData.isActive ? classes.active : ""}>🎧 Music</NavLink>
            </div>
            <div className={classes.item}>
                {/*<a href="#" className={classes.item}>Settings</a>*/}
                <NavLink to="/settings" className={navData => navData.isActive ? classes.active : ""}>⚙️
                    Settings</NavLink>
            </div>

        </nav>)
}

export default Nav;