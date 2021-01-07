import React, { useState } from 'react'
import s from './users.module.css'


const Search = (props) => {

    const [filter, setFilter] = useState('')


    const changeFilter = (e) => {
        let value = e.target.value
        setFilter(value);
        props.searchFilter(value);

    }

    return (
        <div className={s.searchWrapper} >
            <div className={s.input}>
                <input type="text" value={filter} onChange={changeFilter} />
            </div>
            <div className={s.button} >
                <button>Drop</button>
            </div>
        </div>
    )

}




export default Search;