import IconPlus from '../../assets/icon-plus.svg'

export interface Button {
    text: string
    style: "accent" | "primary"
    type: "1" | "2" | "3"
    show?: "mobile" | "desktop"
}

function Button(props: Button) {

    const {text, type, show, style} = props

    return (
        <button className={`btn btn-${style}-${type} ${show}`}>
            <span className="btn-img">
            <img src={IconPlus} alt="icon-button"/>
            </span>
            <span className="text-lg">
              {text}
            </span>
        </button>
    )
}

export default Button
