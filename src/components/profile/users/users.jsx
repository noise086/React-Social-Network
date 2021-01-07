import React, { useState } from 'react'
import s from './users.module.css'
import Preloader from '../../common/preloader/preloader';
import Paginator from '../../common/paginator/paginator';
import User from './user';

const Users = ({ followingInProgress, setToggleUnFollow, setToggleFollow, ...props }) => {

    const [filter, setFilter] = useState('')
    let users = props.users
    const changeFilter = (e) => {
        let value = e.target.value
        setFilter(value);
    }
    let filteredUsers = users.filter(u => u.name.indexOf(filter) > -1)

    return (
    <div>
        <Paginator 
            currentPage={props.currentPage} 
            onSetCurrentPage={props.onSetCurrentPage}
            totalCount={props.totalCount}
            pageSize={props.pageSize} />
        <div>
            <div className={s.searchWrapper} >
                <div className={s.input}>
                    <input type="text" value={filter} onChange={changeFilter} />
                </div>
                <div className={s.button} >
                    <button>Drop</button>
                </div>
            </div>
        </div>
        <div>
            {(props.isLoaded) 
            ? <Preloader /> 
            : filteredUsers.map(u => { return <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    setToggleUnFollow={setToggleUnFollow}
                    setToggleFollow={setToggleFollow}
                />
            })
            }
        </div>
    </div>
    )
}

export default Users;