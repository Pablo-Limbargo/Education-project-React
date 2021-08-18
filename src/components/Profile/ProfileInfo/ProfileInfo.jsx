import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt='profile-img'
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
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