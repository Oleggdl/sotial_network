import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/user.png'
import { NavLink } from "react-router-dom";
import Paginator from "../common/paginator/Paginator";
import User from "./User";


let Users = ({ currentPage, onPageChenge, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChenge={onPageChenge}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    </div>
}
export default Users