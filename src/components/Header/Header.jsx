import classes from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            {/*<img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg" alt=""/>*/}
            <h1 className={classes.logo}><Link to="/">🚀 RocketGram</Link></h1>
            <div className={classes.loginInfo}>
                {
                    props.isAuth ?
                        <div className={classes.personal}>
                            <NavLink to={'/profile/' + props.id}>
                                <h2>{props.login}</h2>
                            </NavLink>
                        </div> :
                        <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;