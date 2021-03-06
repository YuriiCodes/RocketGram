import classes from "./NewMessageForm.module.css"
import {useFormik} from 'formik';
import * as Yup from 'yup';

function NewMessageForm(props) {


    const formik = useFormik({
        initialValues: {
            message: props.newMessageText
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .required('Required')
                .min(2, 'Too Short!')
                .max(70, 'Too Long!')
        }),
        onSubmit: values => {
            props.sendMessage();
            formik.resetForm();
        }
    });

    const hasError = formik.touched.message && formik.errors.message;
    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <input
                type="text"
                value={props.newMessageText}
                className={classes.input + " " + (hasError ? classes.errorInput : "")}

                name={"message"}
                id={"message"}

                onBlur={formik.handleBlur}
                onChange={(e) => {
                    formik.handleChange(e);
                    props.updateMessage(e.target.value);
                }}
            />
            <button type={"submit"} className={classes.submit}>
                Send
            </button>
            {hasError ? (
                <div className={classes.error}>{formik.errors.message}</div>
            ) : null}
        </form>
    )
}

export default NewMessageForm;