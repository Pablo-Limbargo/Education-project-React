import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/ava-no-image.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then( () => {
            setEditMode(false);
        });
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
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                    />}

            </div>
        </div>
    )

}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit info</button>
        </div>}
        <div>
            <h3>Full name: {profile.fullName}</h3>
        </div>
        <div>
            <b>Job status</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;