import React from 'react';
import classes from './Login.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../data/authReducer";
import {Navigate} from "react-router-dom";



const LoginForm = (props) => {
    const rememberMe = "rememberMe";
    const login = "login";
    const password = "password";
    const loginFormValidationSchema = Yup.object({
        // fields value must be the same we entered in formik's initialValues
        login: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        rememberMe: Yup.boolean().required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            rememberMe: false
        },
        validationSchema: loginFormValidationSchema,
        onSubmit: values => {
            props.login(values.login, values.password, values.rememberMe);
            formik.resetForm();
            alert(JSON.stringify(values, null, 2));
        },
    });
    window.formik = formik;

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor={login}>Login</label>
                    </div>
                    <input
                        className={classes.textInput}
                        id={login}
                        name={login}
                        type={"text"}
                        value={formik.values.login}
                        placeholder={"login"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.login && formik.errors.login ? (
                        <div><b> {formik.errors.login}</b></div>
                    ) : null}
                </div>
                <div>
                    <div>
                        <label htmlFor={password}>Password</label>
                    </div>
                    <input
                        className={classes.textInput}
                        id={password}
                        name={password}
                        type={"password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"password"}/>
                    {formik.touched.password && formik.errors.password ? (
                        <div><b> {formik.errors.password}</b></div>
                    ) : null}
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        name={rememberMe}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.rememberMe}
                        id={rememberMe}/>
                    <label htmlFor={rememberMe}>Remember me</label>
                    {formik.touched.rememberMe && formik.errors.rememberMe ? (
                        <div><b> {formik.errors.rememberMe}</b></div>
                    ) : null}
                </div>
                <div>
                    <button className={classes.submit} type={"submit"} disabled={!(formik.isValid && formik.dirty)}>Login</button>
                </div>
            </form>
        </div>
    );
}

const Login = (props) => {
    if(props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <LoginForm login={props.loginThunkCreator} logout={props.logoutThunkCreator}/>
        </div>
    )
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login);