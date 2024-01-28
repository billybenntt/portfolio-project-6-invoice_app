import IconDelete from '../../assets/icon-delete.svg'

function FormListItem(props) {

    const {name, quantity, price, total, handleChange, id} = props


    const handleItemChange = (e) => {

    }


    return (
        <div className="form__list-item">

            <div>
                <label htmlFor={name} className="form__label">Item Name</label>
                <input type="text"
                    className="form__input"
                    name={`name`}
                    value={name}
                    id={name}
                    onChange={(e) => handleChange({...props, name: e.target.value})}
                />
            </div>


            <div className="form__group">
                <div>
                    <label htmlFor={quantity} className="form__label">Qty</label>
                    <input type="text"
                        className="form__input"
                        name={`quantity`}
                        value={quantity}
                        id={quantity}
                        onChange={(e) => handleChange({...props, name: e.target.value})}
                    />

                </div>
                <div>
                    <label htmlFor={price} className="form__label">Price</label>
                    <input type="text"
                        className="form__input"
                        name={`items.price.${id}`}
                        value={price}
                        id={price}
                        onChange={(e) => handleChange({...props, name: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="" className="form__label">Total</label>
                    <h4 className="item__total">{total}</h4>
                </div>

                <div className="form__item-delete"
                    onClick={() => handleChange(null, id)}>
                    <span>
                        <img src={IconDelete} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormListItem
