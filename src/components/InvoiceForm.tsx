import {FormRowSelect, FormRow, FormRowItem} from "./";
import {IconArrowLeft, IconPlus} from '../assets/'
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {createItem, handleAddressChange, handleChange, closeForm} from "../features/Form/formSlice.tsx";
import {addInvoice, updateInvoice} from "../features/Invoice/invoiceSlice.tsx";
import {UpdateFormEvent, SubmitFormEvent, Item} from "../types/app";

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
        if (isEditing) {
            dispatch(updateInvoice())
        } else {
            dispatch(addInvoice())
        }
        dispatch(closeForm())
    }

    return (
        <div>
            <form className={`invoice-form ${showForm ? "show" : ""} invoice-form-overlay`} onSubmit={onFormSubmit}>
                <div className="invoice-form-center">
                    <div className="invoice-form-status">
                        <p>{isEditing ? `Edit #${invoice.invoice_id}` : "New Invoice"}</p>
                    </div>
                    <div className="invoice-form-return mobile" onClick={onFormClose}>
                    <span>
                        <img src={IconArrowLeft} alt="icon-back"/>
                    </span>
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


                    <button className="btn btn-accent-3" type="button" onClick={onItemCreate}>
                        <img src={IconPlus} alt="icon"/>
                        <span className="text-lg">Add New Item</span>
                    </button>
                </div>

                {/*BUTTONS */}
                <div className="invoice-form__controls">
                    {isEditing ? (<div className="controls__edit">
                            <button className="btn btn-accent-1" type="button" onClick={onFormClose}>
                                <span className="text-lg">Cancel</span>
                            </button>
                            <button className="btn btn-primary-2">
                                <span className="text-lg">Save Changes</span>
                            </button>
                        </div>) :
                        <div className="controls__create">
                            <button className="btn btn-accent-1" type="button" onClick={onFormClose}>
                                <span className="text-lg">Discard</span>
                            </button>
                            <button className="btn btn-accent-2" type="submit" onClick={onFormSubmit}>
                                <span className="text-lg">Save as Draft</span>
                            </button>
                            <button className="btn btn-primary-2" type="submit" onClick={onFormSubmit}>
                                <span className="text-lg">Save and Send</span>
                            </button>
                        </div>
                    }
                </div>
            </form>
        </div>


    )
}

export default InvoiceForm
