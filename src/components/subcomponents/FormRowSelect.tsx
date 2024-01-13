import IconImg from '../../assets/icon-arrow-down.svg'
import React, {useState} from "react";

type formRow = {
    label: string
}


function FormRowSelect(props:    formRow) {

    const [value, setValue] = useState("First Option");
    const [show, setShow] = useState("hide");


    const {label} = props

    const handleToggle = () => {
        setShow("show");
    };

    const handleOption = (value: string) => {
        setValue(value)
        setShow("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Update the state when the input value changes
        console.log(e.target.value)
        setShow("");
    };


    return (
        <div className="form__row-select">
            <label htmlFor="" className="form__label">{label}</label>
            <input type="text" value={value} className="form__input" onClick={handleToggle} onChange={handleChange}/>
            <span className="form__input-icon">
                <img src={IconImg} alt="form__input-icon"/>
            </span>

            <ul className={`form__select ${show}`} onMouseLeave={() => setShow("")}>
                <li className="form__select-item" onClick={() => handleOption("option 1")}>option 1</li>
                <li className="form__select-item" onClick={() => handleOption("option 2")}>option 2</li>
                <li className="form__select-item" onClick={() => handleOption("option 3")}>option 3</li>
                <li className="form__select-item" onClick={() => handleOption("option 4")}>option 4</li>
            </ul>
        </div>

    )
}

export default FormRowSelect
