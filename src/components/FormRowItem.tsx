import * as Form from '@radix-ui/react-form';
import {deleteItem, handleItemChange} from "../features/Form/formSlice.ts";
import {useAppDispatch} from '../store/hooks.ts';
import {IconDelete} from "../assets";
import {UpdateFormEvent} from "../types/app";

function FormRowItem(props: any) {

    const dispatch = useAppDispatch()

    const {name, quantity, price, total, index, inputName, inputValue} = props

    const onItemChange = (e: UpdateFormEvent) => {
        console.log(e)
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
                        name={`name-${index}`}
                        value={inputValue}
                        id={`name-${index}`}
                        type="text"
                        placeholder="Enter Item Name"
                        maxLength={20}
                        disabled={false}
                        required/>
                </Form.Control>
            </Form.Field>


            {/*QUANTITY */}
            <Form.Field name="item" className="item">
                <Form.Label className="form__label mobile" htmlFor={`qty-${index}`}>
                    Qty
                </Form.Label>
                <Form.Control asChild>
                    <input className="form__input"
                        name={`qty-${index}`}
                        value={inputValue}
                        id={`qty-${index}`}
                        type="text"
                        placeholder="0"
                        maxLength={3}
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
                        name={`${inputName}-${index}`}
                        value={inputValue}
                        id={`price-${index}`}
                        type="number"
                        placeholder="0"
                        maxLength={4}
                        disabled={false}
                        required/>
                </Form.Control>
            </Form.Field>


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
