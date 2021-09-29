import React from "react";
import s from './login.module.css'
import {useFormik} from "formik";
import {login} from "../../redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Не корректный email';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'Пароль дожен иметь не менее 3 символов';
    }

    return errors;
};

class LoginPageContainer extends React.Component{

    render() {
        return <LoginPage {...this.props}/>
    }
}

const LoginPage = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe)
        }
    })
    if(props.isLogined) return <Redirect to={'/find-work'}/>

    else{
        return <div className={s.login}>
            <h1 className={s.title}>Вход</h1>
            <LoginForm onSubmit={formik.handleSubmit} formik={formik}/>
        </div>
    }

}

const LoginForm = (props) => {
    return <form onSubmit={props.onSubmit} className={s.submitForm}>
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    value={props.formik.values.email}
                />
                {props.formik.touched.email && props.formik.errors.email ?
                    <div style={{border:'1px solid red', padding:'5px'}}>{props.formik.errors.email}</div>
                    : null
                }
            </div>
            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={'on'}
                    onChange={props.formik.handleChange}
                    onBlur={props.formik.handleBlur}
                    value={props.formik.values.password}
                />
                {props.formik.touched.password && props.formik.errors.password ?
                    <div style={{border:'1px solid red', padding:'5px'}}>{props.formik.errors.password}</div>
                    : null
                }
            </div>
            <div className={s.rememberMe}>
                <input
                    id={'rememberMe'}
                    name={'rememberMe'}
                    type={'checkbox'}
                    onChange={props.formik.handleChange}
                    value={props.formik.values.rememberMe}
                />
                    запомнить меня
            </div>
            <button type={'submit'} className={s.submitForm_btn}>Войти</button>
        </form>
}

const mapStateToProps = state => {
    return{
        isLogined: state.auth.isLogined
    }
}

export default compose(
    connect(mapStateToProps,{login})
)(LoginPageContainer);