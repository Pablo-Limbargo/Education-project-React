import styles from "./users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChange, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className={styles.wrapper}>

            <Paginator
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(u => <User
                            user={u}
                            key={u.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Users;