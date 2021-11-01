import React from "react"
import { Field } from "redux-form";
import styles from "./FormsControl.module.css"

export const Element = Element => ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validate, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}
            validate={validate}
            {...props}
            {...text} />
    </div>

)