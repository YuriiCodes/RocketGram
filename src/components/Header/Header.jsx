import classes from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}><Link to="/">🚀 RocketGram</Link></h1>
            <div>
                {
                    props.isAuth ?
                        <div className={classes.personal}>
                            <NavLink to={'/profile/' + props.id}  className={classes.loginInfo}>
                                <h2>{props.login}</h2>
                                <button className={classes.logoutBtn} onClick={props.logout}>Log out</button>
                            </NavLink>
                        </div> :
                        <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;