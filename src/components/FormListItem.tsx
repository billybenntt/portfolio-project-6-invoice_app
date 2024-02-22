import {IconDelete} from '../assets'
import {handleItemChange, deleteItem} from "../features/Form/formSlice.tsx";
import {useAppDispatch} from '../store/hooks.ts';


function FormListItem(props: any) {

    const dispatch = useAppDispatch()

    const {name, quantity, price, total, index} = props

    const onItemChange = (e: any) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        dispatch(handleItemChange({inputName, inputValue, index}))
    }
    const onItemDelete = () => {
        dispatch(deleteItem({index}))
    }


    return (
        <div className="form__list-item">
            <div>
                <label htmlFor={`item-name-${index}`} className="form__label">Item Name</label>
                <input type="text"
                    className="form__input"
                    name={`name`}
                    value={name}
                    id={`item-name-${index}`}
                    onChange={onItemChange}
                />
            </div>


            <div className="form__group">
                <div>
                    <label htmlFor={`item-quantity-${index}`} className="form__label">Qty</label>
                    <input type="text"
                        inputMode="numeric"
                        className="form__input"
                        name="quantity"
                        value={quantity}
                        id={`item-quantity-${index}`}
                        onChange={onItemChange}
                    />

                </div>
                <div>
                    <label htmlFor={`item-price-${index}`} className="form__label">Price</label>
                    <input type="text"
                        className="form__input"
                        name={`price`}
                        inputMode="numeric"
                        value={price}
                        id={`item-price-${index}`}
                        required={true}
                        onChange={onItemChange}
                    />
                </div>

                <div>
                    <label htmlFor={`item-total-${index}`} className="form__label">Total</label>
                    <h4 className="item__total" id={`item-total-${index}`}>{total}</h4>
                </div>

                <div className="form__item-delete"
                    onClick={onItemDelete}>
                    <span>
                        <img src={IconDelete} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormListItem
