import { forwardRef, useImperativeHandle, useRef } from 'react'
import classes from './input.module.css'

const Input = forwardRef((props: any, ref) => {
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        }
    }))
    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div
            className={`${classes.control} ${props.inValid === false ? classes.invalid : ''}`}>
            <label htmlFor="email">{props.children}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChangeHandler}
                onBlur={props.onBlurHandler}
            />
        </div>
    )
})

export default Input