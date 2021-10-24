import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: true, fullName: 'Oleg', status: 'I am a junior developer', location: { sity: 'Pinsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: true, fullName: 'Sasha', status: 'I am a senior developer', location: { sity: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: false, fullName: 'Andrew', status: 'I am a middle developer', location: { sity: 'Kiev', country: 'Ukraine' } },
        ])
    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={styles.userPhoto} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }

                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.sity}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users