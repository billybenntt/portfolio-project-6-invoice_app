import IconImg from '../../assets/icon-arrow-down.svg'
import {useState} from "react";


function FormRowSelect(props: any) {

    const {label, name, onChange, value} = props

    // Local State Value
    const [currentValue, setCurrentValue] = useState(value);

    // Show/Hide Option Control
    const [show, setShow] = useState("hide");

    // Update value with Central and Local State & Close Option
    const sendValue = (newValue: number) => {
        setCurrentValue(newValue);
        onChange({ name, value: newValue});
        setShow("hide")
    }


    return (
        <div className="form__row-select">
            <label htmlFor={name} className="form__label">{label}</label>
            <input type="text"
                className="form__input"
                id={name}
                name={name}
                onChange={() => sendValue}
                value={currentValue}
                onClick={() => setShow("show")}
            />
            <span className="form__input-icon">
                <img src={IconImg} alt="form__input-icon"/>
            </span>
            <ul className={`form__select ${show}`} onMouseLeave={() => setShow("")}>
                <li className="form__select-item" onClick={() => sendValue(1)}>Option 1</li>
                <li className="form__select-item" onClick={() => sendValue(2)}>Option 2</li>
                <li className="form__select-item" onClick={() => sendValue(3)}>Option 3</li>
                <li className="form__select-item" onClick={() => sendValue(4)}>Option 4</li>
            </ul>
        </div>

    )
}

export default FormRowSelect
