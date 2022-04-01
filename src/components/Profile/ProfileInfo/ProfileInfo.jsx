import classes from "./ProfileInfo.module.css"
function ProfileInfo(props){
    return(
        <div className={classes.cover}>
            <img src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="your cover"/>
        </div>
    )
}
export default ProfileInfo;