import {ButtonProps} from "@/types/app";


function Button(props: ButtonProps) {

    const {
        text,
        variation,
        type,
        showSize,
        onClick
    } = props


    return (
        <button
            className={`btn ${variation} ${showSize}`}
            type={type}
            onClick={onClick}>
            <span>{text}</span>
        </button>
    )
}

export default Button
