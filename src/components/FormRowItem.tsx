import * as Form from '@radix-ui/react-form';
import {deleteItem} from "../features/Form/formSlice.tsx";
import {useAppDispatch} from '../store/hooks.ts';
import {IconDelete, IconSun} from "../assets";

function FormRowItem(props: any) {

    const dispatch = useAppDispatch()

    const {name, quantity, price, total, index} = props

    // const onItemChange = (e: any) => {
    //     // dispatch(handleItemChange({inputName, inputValue, index}))
    // }

    const onItemDelete = (): void => {
        dispatch(deleteItem({index}))
    }


    return (
        <Form.Root asChild={true}>
            <div className="form__row-items-center">


                {/* ITEM NAME */}
                <Form.Field name="item" className="item">
                    <Form.Label className="form__label mobile">
                        Item Name
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="form__input"
                            name="item-name"
                            value={name}
                            id="item-id"
                            type="text"
                            disabled={false}
                            required/>
                    </Form.Control>
                </Form.Field>


                {/*QUANTITY */}
                <Form.Field name="item" className="item">
                    <Form.Label className="form__label mobile">
                        Qty
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="form__input"
                            name="item-qty"
                            value={quantity}
                            id="item-id"
                            type="number"
                            disabled={false}
                            required/>
                    </Form.Control>
                </Form.Field>

                {/*PRICE */}
                <Form.Field name="item" className="item">

                    <Form.Label className="form__label mobile">
                        Item Name
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="form__input"
                            name="item-name"
                            value={price}
                            id="item-id"
                            type="number"
                            disabled={false}
                            required/>
                    </Form.Control>
                </Form.Field>

                {/*TOTAL */}
                <Form.Field name="item" className="item">

                    <Form.Label className="form__label mobile">
                        Total
                    </Form.Label>
                    <Form.Control asChild>
                        <input className="form__input"
                            name="item-name"
                            value={total}
                            id="item-id"
                            type="number"
                            disabled={true}
                            required/>
                    </Form.Control>
                </Form.Field>

                {/*DELETE BUTTON*/}
                <span className="item icon" onClick={onItemDelete}>
                    <IconDelete />
                </span>
            </div>
        </Form.Root>
    )
}

export default FormRowItem
