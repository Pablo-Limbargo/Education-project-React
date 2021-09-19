import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        //
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // });
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items)
    //         });
    //     }
    // }

    onPageChange = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        //
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        // });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let withRedirect = withAuthRedirect(UsersContainer)
//
// // let mapDispatchToProps = (dispatch) =>
// // {
// //     return {
// //         follow: (userId) => {
// //             dispatch(followAC(userId))
// //         },
// //         unfollow: (userId) => {
// //             dispatch(unfollowAC(userId))
// //         },
// //         setUsers: (users) => {
// //             dispatch(setUsersAC(users))
// //         },
// //         setCurrentPage: (pageNumber) => {
// //             dispatch(setCurrentPageAC(pageNumber))
// //         },
// //         setTotalUsersCount: (totalCount) => {
// //             dispatch(setTotalUsersCountAC(totalCount))
// //         },
// //         toggleIsFetching: (isFeching) => {
// //             dispatch(toggleIsFetchingAC(isFeching))
// //         }
// //     }
// // }
//
// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers
// })(withRedirect)

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }),
    // withAuthRedirect
) (UsersContainer)