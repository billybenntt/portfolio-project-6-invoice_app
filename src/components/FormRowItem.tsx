import * as Form from '@radix-ui/react-form';
import {deleteItem} from "../features/Form/formSlice.tsx";
import {TrashIcon} from '@radix-ui/react-icons'
import {useAppDispatch} from '../store/hooks.ts';


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
            <div className="form__row-item">

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


                <div className="group">
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
                            <input className="form__output"
                                name="item-name"
                                value={total}
                                id="item-id"
                                type="number"
                                disabled={true}
                                required/>
                        </Form.Control>
                    </Form.Field>

                    {/*DELETE BUTTON*/}
                    <div className="form__input-delete item" onClick={onItemDelete}>
                        <TrashIcon width="24" height="24" color="red"/>
                    </div>
                </div>
            </div>
        </Form.Root>
    )
}

export default FormRowItem
