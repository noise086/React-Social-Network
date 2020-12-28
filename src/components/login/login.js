import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators';
import { Input } from '../common/formsControl/formsControl';
import s from '../common/formsControl/formsControl.module.css'


const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>

}

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    component={Input}
                    validate={[required]}
                    type={'text'}
                    placeholder={'Login'} />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    type={'text'}
                    placeholder={'password'} />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    component={Input}
                    type={'checkbox'} /> remember me
            </div >
            { props.error && <div className={s.commonError} >
                {props.error}
            </div>
            }
            <button>login</button>
        </form>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(mapStateToProps, {login})(Login)