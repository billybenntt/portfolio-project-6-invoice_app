import * as Form from '@radix-ui/react-form';
import {deleteItem, handleItemChange} from "../features/Form/formSlice.ts";
import {useAppDispatch} from '../store/hooks.ts';
import {IconDelete} from "../assets";
import {UpdateFormEvent, FormRowItemProps} from "../types/app";

function FormRowItem(props: FormRowItemProps) {

    const dispatch = useAppDispatch()

    const {name, quantity, price, total, index} = props

    const onItemChange = (event: UpdateFormEvent): void => {
        const inputName = event.target.name
        const inputValue = event.target.value
        dispatch(handleItemChange({inputName, inputValue, index}))
    }

    const onItemDelete = (): void => {
        dispatch(deleteItem({index}))
    }


    return (
        <div className="form__row-items-center">
            {/* ITEM NAME */}
            <Form.Field name="item" className="item">
                <Form.Label className="form__label mobile" htmlFor={`name-${index}`}>
                    Item Name
                </Form.Label>
                <Form.Control asChild>
                    <input className="form__input"
                        type="text"
                        name="name"
                        value={name}
                        maxLength={20}
                        placeholder="Enter the item's name"
                        onChange={onItemChange}
                        id={`name-${index}`}
                        disabled={false}
                        required/>
                </Form.Control>
            </Form.Field>


            {/*QUANTITY */}
            <Form.Field name="item" className="item">
                <Form.Label className="form__label mobile" htmlFor={`quantity-${index}`}>
                    Qty
                </Form.Label>
                <Form.Control asChild>
                    <input className="form__input"
                        type="text"
                        name="quantity"
                        value={quantity}
                        maxLength={3}
                        placeholder="0"
                        onChange={onItemChange}
                        id={`quantity-${index}`}
                        disabled={false}
                        required/>
                </Form.Control>
            </Form.Field>

            {/*PRICE */}
            <Form.Field name="item" className="item">
                <Form.Label className="form__label mobile" htmlFor={`price-${index}`}>
                    Item Name
                </Form.Label>
                <Form.Control asChild>
                    <input className="form__input"
                        type="text"
                        name="price"
                        value={price}
                        maxLength={3}
                        placeholder="0"
                        onChange={onItemChange}
                        id={`price-${index}`}
                        disabled={false}
                        required/>
                </Form.Control>
            </Form.Field>

            {/*TOTAL */}
            <div className="item">
                <div className="form__label mobile">
                    <span>
                        Total
                    </span>
                </div>
                <div className="form__input">
                    {total}
                </div>
            </div>

            {/*DELETE BUTTON*/}
            <span className="item icon" onClick={onItemDelete}>
                    <IconDelete/>
                </span>
        </div>
    )
}

export default FormRowItem
