import React from 'react'
import { Field } from 'redux-form'
import { maxlength, required } from '../../../../utils/validators'
import { Textarea } from '../../../common/formsControl/formsControl'
import s from '../dialog.module.css'

const maxLength = maxlength(30)

export const DialogsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={s.textareaWrapper}>
            <Field name='textarea' 
                   validate={[required, maxLength]}
                   component={Textarea} 
                   type='text' 
                   className={s.textarea} />
            <button
                      className={s.button} 
                      >send</button>
        </form>
    )
}