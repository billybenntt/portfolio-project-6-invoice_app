type formRow = {
    label: string
    name: string
    handleChange: any
    value: string
}


function FormRow(props: formRow) {

    const {label, handleChange, name, value} = props


    return (
        <div className="form__row">
            <label htmlFor={name} className="form__label">{label}</label>
            <input type="text" className="form__input"  value={value}
                onChange={handleChange} name={name} id={name}/>
        </div>

    )
}

export default FormRow
