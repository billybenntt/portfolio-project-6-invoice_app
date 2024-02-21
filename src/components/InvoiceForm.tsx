import IconArrowLeft from '../assets/icon-arrow-left.svg'
import IconPlus from '../assets/icon-plus.svg'
import FormRowSelect from "./ui/FormRowSelect.tsx";
import FormListItem from "./ui/FormListItem.tsx";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {createItem, handleAddressChange, handleChange, closeForm} from "../features/Form/formSlice.tsx";
import {addInvoice, updateInvoice} from "../features/Invoice/invoiceSlice.tsx";
import FormRowAlt from "./ui/FormRowAlt.tsx";

function InvoiceForm() {

    const dispatch = useAppDispatch()
    const {showForm, isEditing, invoice} = useAppSelector(store => store.form)


    // CLOSE FORM
    const onFormClose = () => {
        dispatch(closeForm())
    }

    const onChange = (e: any) => {
        const inputName = e.target.name;
        const inputValue = e.target.value
        dispatch(handleChange({inputName, inputValue}))
    }

    const onAddressChange = (e: any, addressType: string) => {
        const inputName = e.target.name;
        const inputValue = e.target.value
        dispatch(handleAddressChange({inputName, inputValue, addressType}))
    }

    const onItemCreate = () => {
        dispatch(createItem())
    }

    const onOptionChange = (propData: any) => {
        const inputName = "paymentTerms";
        const inputValue = propData
        dispatch(handleChange({inputName, inputValue}))
    }

    const onFormSubmit = (e: any) => {
        e.preventDefault()
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

                        <FormRowAlt
                            label="Street Address"
                            inputType="text"
                            name="street"
                            addressType="client"
                            onChange={onAddressChange}
                            value={invoice.clientAddress.street}
                        />


                        <div className="invoice-group">
                            <FormRowAlt
                                label="City"
                                inputType="text"
                                name="city"
                                addressType="client"
                                onChange={onAddressChange}
                                value={invoice.clientAddress.city}
                            />

                            <FormRowAlt
                                label="Post Code"
                                inputType="text"
                                name="postCode"
                                addressType="client"
                                onChange={onAddressChange}
                                value={invoice.clientAddress.postCode}
                            />

                            <FormRowAlt
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
                        <FormRowAlt
                            label="Client’s Name"
                            inputType="text"
                            name="clientName"
                            onChange={onChange}
                            value={invoice.clientName}
                        />
                        <FormRowAlt
                            label="Client’s Email"
                            inputType="email"
                            name="clientEmail"
                            onChange={onChange}
                            value={invoice.clientEmail}
                        />

                        <FormRowAlt
                            label="Street Address"
                            inputType="text"
                            name="street"
                            addressType="sender"
                            onChange={onAddressChange}
                            value={invoice.senderAddress.street}
                        />


                        <div className="invoice-group">
                            <FormRowAlt
                                label="City"
                                inputType="text"
                                name="city"
                                addressType="sender"
                                onChange={onAddressChange}
                                value={invoice.senderAddress.city}
                            />

                            <FormRowAlt
                                label="Post Code"
                                inputType="text"
                                name="postCode"
                                addressType="sender"
                                onChange={onAddressChange}
                                value={invoice.senderAddress.postCode}
                            />

                            <FormRowAlt
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
                    <div>
                        <div className="invoice-group">
                            <FormRowAlt
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
                            <FormRowAlt
                                label="Description"
                                inputType="text"
                                name="description"
                                onChange={onChange}
                                value={invoice.description}
                            />
                        </div>
                    </div>

                    {/*ITEM LIST*/}

                    <h4 className="text-lg-alt text-light-1">Item List</h4>
                    <div>
                        <div>
                            {invoice.items.map((item: any, index: number) => (
                                <FormListItem
                                    key={index}
                                    index={index}
                                    {...item}
                                />
                            ))}
                        </div>

                        {/*ADD MORE ITEMS */}
                        <button className="btn btn-accent-3" type="button" onClick={onItemCreate}>
                            <img src={IconPlus} alt="icon"/>
                            <span className="text-lg">Add New Item</span>
                        </button>
                    </div>
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
