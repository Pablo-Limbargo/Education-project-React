import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/ava-no-image.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
           savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                {/*<img alt='profile-img'*/}
                {/*     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img alt='photo_large' src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h3>Full Name: {profile.fullName}</h3>
                <h3>About me: {profile.aboutMe}</h3>
                <div>VK: <a href='https://vk.com/dimych'>{profile.contacts.vk}</a></div>
                <div>twitter: <a href='https://twitter.com/@sdf'>{profile.contacts.twitter}</a></div>
                <div>instagram: <a href='https://instagram.com/sds'>{profile.contacts.instagram}</a></div>
                <p>Job status: {profile.lookingForAJobDescription}</p>
            </div>
        </div>

    )
}

export default ProfileInfo;