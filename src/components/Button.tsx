import {SubmitFormEvent} from "@/types/app.definitions.ts";


interface IProps {
    text: string
    variation: "primary" | "primary-icon" | "light" | "light-icon" | "dark" | "danger"
    showSize?: "desktop" | "mobile"
    type: "submit" | "button",
    onClick: () => void | ((value: SubmitFormEvent) => void);
}


function Button(props: IProps) {

    const {
        text, variation, type, showSize, onClick
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
