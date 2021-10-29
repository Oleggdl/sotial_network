import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <br />
                {props.profile.aboutMe}
                <br />
                <ProfileStatus status={'hello, go to dick'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;