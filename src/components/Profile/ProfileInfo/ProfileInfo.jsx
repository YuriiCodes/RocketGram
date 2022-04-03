import classes from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";

function ProfileInfo(props) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={classes.cover}>
                <img
                    src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="your cover"/>
            </div>
            <div className={classes.profile}>
                {/*<span>{props.profile.fullName}</span>*/}
                <h1>Profile of: {props.profile.fullName}</h1>
                <h2>{props.profile.aboutMe}</h2>
                {props.profile.lookingForAJob ? <h3>Looking for a job</h3> : <h3>Not looking for a job</h3>}
                <h4>{props.profile.lookingForAJobDescription}</h4>

            </div>
        </>
    )
}

export default ProfileInfo;
/*
* aboutMe: "я круто чувак 1001%"
contacts: {facebook: 'facebook.com', website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds', …}
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'}
userId: 2
* */