type formRow = {
    label: string
}


function FormRow(props: formRow) {

    const {label} = props


    return (
        <div className="form__row">
            <label htmlFor="" className="form__label">{label}</label>
            <input type="text" className="form__input"/>
        </div>

    )
}

export default FormRow
