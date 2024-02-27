// import {IconPlus} from '../assets'
import {ButtonProps} from "../types/app";


function Button(props, children) {

    const {text, variation, type, onClick} = props

    console.log(children)

    return (
        <button
            className={`btn ${variation}`}
            type={type}
            onClick={onClick}>

            <span>{text}</span>
        </button>
    )
}

export default Button
