import preloaderGif from  "./../../../assets/images/preloader32x32.gifG";
import classes from "./Preloader.module.css"
function Preloader(props){
    return (
        <div className={classes.preloaderContainer}>
            <img className={classes.prealoder} src={preloaderGif} alt="preloader" />
        </div>
    )
}
export default Preloader;