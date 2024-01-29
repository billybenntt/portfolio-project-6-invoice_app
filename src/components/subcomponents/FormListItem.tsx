import IconDelete from '../../assets/icon-delete.svg'
import {handleItemChange} from "../../features/Form/formSlice.tsx";
import {useAppDispatch} from '../../store/hooks.ts';


function FormListItem(props: any) {


    const dispatch = useAppDispatch()

    const {name, quantity, price, total, index} = props

    const onItemChange = (e:any) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        dispatch(handleItemChange({inputName, inputValue, index}))
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
                    onChange={onItemChange}
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
                        onChange={onItemChange}
                    />

                </div>
                <div>
                    <label htmlFor={price} className="form__label">Price</label>
                    <input type="text"
                        className="form__input"
                        name={`price`}
                        value={price}
                        id={price}
                        onChange={onItemChange}
                    />
                </div>

                <div>
                    <label htmlFor={total} className="form__label">Total</label>
                    <h4 className="item__total" id={total}>{total}</h4>
                </div>

                <div className="form__item-delete"
                    onClick={onItemChange}>
                    <span>
                        <img src={IconDelete} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormListItem
