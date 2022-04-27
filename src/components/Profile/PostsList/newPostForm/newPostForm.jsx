import classes from "./newPostForm.module.css";
import {useRef} from "react";

import {useFormik} from 'formik';
import * as Yup from 'yup';



function NewPostForm(props) {
    const newPostInput = useRef(null);

    const formik = useFormik({
        initialValues: {
            postInput: ''
        },
        validationSchema: Yup.object({
            postInput: Yup.string()
                .max(255, 'Too long!')
                .required('Message is required')
        }),
        onSubmit: values => {
            props.addPost();
            formik.resetForm();
            newPostInput.current.focus();
        }
    });
    window.formik = formik;
    let addPost = (e) => {
        e.preventDefault();
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostInput.current.value;
        props.updateNewPostText(text);
    };
    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <label htmlFor="postInput">Add new post</label>
            <input id="postInput"
                   ref={newPostInput}
                   type="text"
                   onChange={(e) => {
                       formik.handleChange(e);
                       onPostChange();
                   }}
                   onBlur={formik.handleBlur}

                   className={classes.input}
                   name="postInput"
                   value={props.newPostText}

            />
            <button type={"submit"} className={classes.submit}>
                Send
            </button>
            {formik.touched.postInput && formik.errors.postInput ? <div className={classes.error}>{formik.errors.postInput}</div> : null}

        </form>
    )
}

export default NewPostForm;