type formRow = {
    label: string
}


function FormRowDate(props: formRow) {

    const {label} = props


    return (
        <div className="form__row">
            <label htmlFor="" className="form__label">{label}</label>
            <input type="date" className="form__input" disabled={true}/>
        </div>

    )
}

export default FormRowDate
