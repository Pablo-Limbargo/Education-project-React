import styles from "../Paginator/Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames";
import arrowLeft from "../../../assets/images/left-arrow.png";
import arrowRight from "../../../assets/images/right-arrow.png";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={ () => {
                setPortionNumber(portionNumber - 1)
            }}>
                <img src={arrowLeft}/>
            </button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChange(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>
                <img src={arrowRight}/>
            </button>}
        </div>
    )
}

export default Paginator;