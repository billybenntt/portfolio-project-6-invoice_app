

function FormRow(props: any) {

    const {label, onChange, name, value, type} = props

    return (
        <div className="form__row">
            <label htmlFor={name} className="form__label">{label}</label>
            <input type="text" className="form__input"  value={value}
                onChange={(e)=> onChange(e, type)} name={name} id={name}/>
        </div>

    )
}

export default FormRow
