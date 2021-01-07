import React, { useState } from 'react';
import { useEffect } from 'react';




const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    },[ props.status ] )

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)

    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }


    return (
        <div>
            {   !editMode &&
                <div>
                    <span onClick={activateEditMode} >{`${status}` || 'no status'} </span>
                </div>
            }
            {
                editMode && 
                <div>
                    <input 
                        autoFocus={true}
                        type="text"
                        value={status}
                        onBlur={deactivateEditMode}
                        onChange={changeStatus} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
