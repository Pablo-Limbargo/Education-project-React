import styles from "../Paginator/Paginator.module.css";
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div>
                {pages.map(p => {
                    return <span
                        className={currentPage === p && styles.selectedPage}
                        onClick={() => {
                            onPageChange(p)
                        }}>{p}</span>
                })}
            </div>
    )
}

export default Paginator;