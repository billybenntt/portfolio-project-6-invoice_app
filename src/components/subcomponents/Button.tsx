import IconPlus from '../../assets/icon-plus.svg'

type Button = {
    text: string
    type: "1" | "2" | "3"
    show?: "mobile" | "desktop"
}

function Button(props: Button) {

    const {text, type, show} = props

    return (
        <button className={`btn btn-primary-${type} ${show}`}>
            <span className="btn-img">
            <img src={IconPlus} alt="icon-button"/>
            </span>
            <span className="text-lg-alt">
              {text}
            </span>
        </button>
    )
}

export default Button
