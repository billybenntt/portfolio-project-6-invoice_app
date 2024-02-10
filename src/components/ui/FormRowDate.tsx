

function FormRowDate(props: any) {

    const {label, name, value, onChange} = props

    return (
        <div className="form__row">
            <label htmlFor={name} className="form__label">{label}</label>
            <input type="date"
                className="form__input"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                disabled={false}/>
        </div>

    )
}

export default FormRowDate
