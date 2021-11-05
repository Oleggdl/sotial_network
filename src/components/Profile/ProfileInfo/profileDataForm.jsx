import React from "react"
import { reduxForm } from "redux-form"
import { createField, Element } from "../../common/FormsControl/FormsControl"
import s from './../ProfileInfo/ProfileInfo.module.css'
import styles from './../../common/FormsControl/FormsControl.module.css'

const Input = Element('input')
const Textarea = Element('textarea')

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={styles.formSummaryError}> {error}
            </div>
            }
        <div>
            <b>Full name </b>  {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b>
            {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
            <b>My profesionals skills</b>
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me: </b>
            {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b>  {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form >
}

const ProfileDataFormReduxPorm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxPorm
