import classes from "./Header.module.css";
import {Link} from "react-router-dom";
function Header(){
    return(
        <header className={classes.header}>
            {/*<img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg" alt=""/>*/}
            <h1 className={classes.logo}> <Link to="/">🚀 RocketGram</Link> </h1>
        </header>
    )
}
export default Header;