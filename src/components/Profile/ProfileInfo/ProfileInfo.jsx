import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/ava-no-image.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img alt='profile-img'*/}
                {/*     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img alt='photo_large' src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <h3>Full Name: {props.profile.fullName}</h3>
                <h3>About me: {props.profile.aboutMe}</h3>
                <div>VK: <a href='https://vk.com/dimych'>{props.profile.contacts.vk}</a></div>
                <div>twitter: <a href='https://twitter.com/@sdf'>{props.profile.contacts.twitter}</a></div>
                <div>instagram: <a href='https://instagram.com/sds'>{props.profile.contacts.instagram}</a></div>
                <p>Job status: {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>

    )
}

export default ProfileInfo;