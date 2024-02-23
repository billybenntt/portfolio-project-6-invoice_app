import {IconPlus} from '../assets'
import {ButtonProps} from "../types/app";


function Button(props: ButtonProps) {

    const {text, type, show, style} = props

    return (
        <button className={`btn btn-${style}-${type} ${show}`}>
            <span className="btn-img">
             <IconPlus/>
            </span>
            <span className="text-lg">
              {text}
            </span>
        </button>
    )
}

export default Button
