import React, { useEffect, useState } from 'react'
import s from './paginator.module.css'

const Paginator = ({currentPage, onSetCurrentPage, totalCount, pageSize}) => {


    useEffect(() => [
        setPage(currentPage)
    ], [currentPage])
    let [page, setPage] = useState(currentPage)

    const changePagesPlus = () => {
        let maxValue;
        let totalPages = totalCount / pageSize;
        page > totalPages - 20 ? maxValue = Math.ceil(totalPages - page) : maxValue = 20
        onSetCurrentPage(page+maxValue)
    }
    const changePagesMinus = () => {
        let maxValue;
        page < 21 ? maxValue = page-1 : maxValue = 20
        onSetCurrentPage(page-maxValue)
    }

    let start;
    page < 6 ? start = 1 : start = page - 5;
    let pages = [];

    for (let i = start; i <= start + 10; i++) {
        if ( i > totalCount / pageSize + 1 ) break
        pages.push(i)
    }

    return (
        <div className={s.paginatorWrapper} >
            <div>
                <button className={s.button} onClick={changePagesMinus} > -20 </button>
            </div>
            <div className={s.pages} >
                {
                    pages.map((p) => {
                        return <span key={p} onClick={() => onSetCurrentPage(p)} className={page === p ? s.currentPage : s.page} >{p}</span>
                    })
                }
            </div>
            <div>
                <button className={s.button} onClick={changePagesPlus} > +20 </button>
            </div>
        </div>
    )

}

export default Paginator;