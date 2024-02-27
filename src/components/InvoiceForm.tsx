import * as Form from '@radix-ui/react-form';
import {IconArrowLeft} from '../assets/'
import {FormRowSelect, FormRow, FormRowItem, Button} from "./";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {UpdateFormEvent, Item, SubmitFormEvent} from "../types/app";
import {addInvoice, updateInvoice} from "../features/Invoice/invoiceSlice.ts";
import {createItem, handleAddressChange, handleChange, closeForm} from "../features/Form/formSlice.ts";


function InvoiceForm() {

    const dispatch = useAppDispatch()
    const {showForm, isEditing, invoice} = useAppSelector(store => store.form)


    const onChange = (event: UpdateFormEvent): void => {
        const inputName = event.target.name;
        const inputValue = event.target.value
        dispatch(handleChange({inputName, inputValue}))
    }

    const onAddressChange = (event: UpdateFormEvent, addressType: string): void => {
        const inputName = event.target.name;
        const inputValue = event.target.value
        dispatch(handleAddressChange({inputName, inputValue, addressType}))
    }

    const onOptionChange = (option: string): void => {
        const inputName = "paymentTerms";
        const inputValue = option
        dispatch(handleChange({inputName, inputValue}))
    }

    const onItemCreate = (): void => {
        dispatch(createItem())
    }

    const onFormClose = (): void => {
        dispatch(closeForm())
    }

    const onFormSubmit = (event: SubmitFormEvent): void => {
        event.preventDefault()
        const formElement = event.target as HTMLFormElement
        const isFormValid = formElement.checkValidity()
        console.log(isFormValid)


        if (isFormValid) {
            if (isEditing) {
                dispatch(updateInvoice())
            } else {
                dispatch(addInvoice())
            }
            dispatch(closeForm())

        }


    }

    return (
        <div>
            <Form.Root
                className={`invoice-form ${showForm ? "show" : ""}`}
                onSubmit={onFormSubmit}>

                <div className="invoice-form-center">
                    <div className="invoice-form-status">
                        {isEditing ?
                            <p>Edit <span>#</span>{invoice.invoice_id}</p> :
                            <p>New Invoice</p>
                        }
                    </div>
                    <div className="invoice-form-return mobile" onClick={onFormClose}>
                        <IconArrowLeft/>
                        <h4>Go back</h4>
                    </div>
                    <h3>Bill From</h3>

                    {/*BILL FROM*/}
                    <div className="invoice-form__from">
                        <FormRow
                            label="Street Address"
                            inputType="text"
                            name="street"
                            addressType="client"
                            onChange={onAddressChange}
                            value={invoice.clientAddress.street}
                        />

                        <div className="invoice-group">
                            <FormRow
                                label="City"
                                inputType="text"
                                name="city"
                                addressType="client"
                                onChange={onAddressChange}
                                value={invoice.clientAddress.city}
                            />

                            <FormRow
                                label="Post Code"
                                inputType="text"
                                name="postCode"
                                addressType="client"
                                onChange={onAddressChange}
                                value={invoice.clientAddress.postCode}
                            />

                            <FormRow
                                label="Country"
                                inputType="text"
                                name="country"
                                addressType="client"
                                onChange={onAddressChange}
                                value={invoice.clientAddress.country}
                            />

                        </div>
                    </div>

                    {/*BILL TO*/}
                    <h3>Bill to</h3>
                    <div className="invoice-form__to">
                        <FormRow
                            label="Client’s Name"
                            inputType="text"
                            name="clientName"
                            onChange={onChange}
                            value={invoice.clientName}
                        />
                        <FormRow
                            label="Client’s Email"
                            inputType="email"
                            name="clientEmail"
                            onChange={onChange}
                            value={invoice.clientEmail}
                        />

                        <FormRow
                            label="Street Address"
                            inputType="text"
                            name="street"
                            addressType="sender"
                            onChange={onAddressChange}
                            value={invoice.senderAddress.street}
                        />


                        <div className="invoice-group">
                            <FormRow
                                label="City"
                                inputType="text"
                                name="city"
                                addressType="sender"
                                onChange={onAddressChange}
                                value={invoice.senderAddress.city}
                            />

                            <FormRow
                                label="Post Code"
                                inputType="text"
                                name="postCode"
                                addressType="sender"
                                onChange={onAddressChange}
                                value={invoice.senderAddress.postCode}
                            />

                            <FormRow
                                label="Country"
                                inputType="text"
                                name="country"
                                addressType="sender"
                                onChange={onAddressChange}
                                value={invoice.senderAddress.country}
                            />

                        </div>
                    </div>

                    {/*BILL DATE*/}
                    <div className="invoice-group">
                        <FormRow
                            label="Invoice Due Date"
                            inputType="date"
                            name="paymentDue"
                            onChange={onChange}
                            value={invoice.paymentDue}
                        />
                        <FormRowSelect
                            label="Payment Terms"
                            name="paymentTerms"
                            value={invoice.paymentTerms}
                            onChange={onOptionChange}
                        />
                    </div>
                    <div>
                        <FormRow
                            label="Description"
                            inputType="text"
                            name="description"
                            onChange={onChange}
                            value={invoice.description}
                        />
                    </div>


                    <div className="form__row-items">
                        <h4 className="items_title">Item List</h4>
                        {/*ITEM LIST*/}
                        <div className="items_header">
                            <p>Item Name</p>
                            <p>Qty.</p>
                            <p>Price</p>
                            <p>Total</p>
                            <p></p>
                        </div>

                        {invoice.items.map((item: Item, index: number) => (
                            <FormRowItem
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>
                </div>


                <div className="invoice-form-create">
                    <Button text="Add New Item"
                        variation="light-icon"
                        type="button"
                        onClick={onItemCreate}/>

                </div>

                {/*BUTTONS */}
                <div className="invoice-form-control">
                    {isEditing ? (<div className="controls__edit">
                            <Button text="cancel"
                                variation="light"
                                type="button"
                                onClick={onFormClose}/>

                            <Button text="save changes"
                                variation="primary"
                                type="submit"
                                onClick={() => console.log("Edit and save")}/>
                        </div>) :
                        <div className="controls__create">
                            <Button text="discard"
                                variation="light"
                                type="button"
                                onClick={onFormClose}/>

                            <Button text="Save as Draft"
                                variation="dark"
                                type="submit"
                                onClick={() => console.log("draft")}/>

                            <Button text="Save and Send"
                                variation="primary"
                                type="submit"
                                onClick={() => console.log("pending")}/>
                        </div>
                    }
                </div>
            </Form.Root>
        </div>


    )
}

export default InvoiceForm
