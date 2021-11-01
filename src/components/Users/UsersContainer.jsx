import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers
} from '../../redux/users-reducer'
import {
    getCurrentPage, getfollowingInProgress, getIsFetching,
    getPageSize, gettotalUsersCount, getAllUsers
} from '../../redux/users-selectors'
import Preloader from '../common/preloader/Preloader'
import Users from './Users'


class UsersContainer extends React.Component {
    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChenge = (pageNum) => {
        let { pageSize } = this.props
        this.props.getUsers(pageNum, pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChenge={this.onPageChenge}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: gettotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getfollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    })
)(UsersContainer)