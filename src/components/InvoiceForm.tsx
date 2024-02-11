import FormRow from "./ui/FormRow.tsx";
import IconArrowLeft from '../assets/icon-arrow-left.svg'
import IconPlus from '../assets/icon-plus.svg'
import FormRowDate from "./ui/FormRowDate.tsx";
import FormRowSelect from "./ui/FormRowSelect.tsx";
import FormListItem from "./ui/FormListItem.tsx";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {createItem, handleAddressChange, handleChange, closeForm} from "../features/Form/formSlice.tsx";
import {addInvoice} from "../features/Invoice/invoiceSlice.tsx";

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

    const onAddressChange = (e: any, type: string) => {
        const inputName = e.target.name;
        const inputValue = e.target.value
        const inputCaller = type
        dispatch(handleAddressChange({inputName, inputValue, inputCaller}))
    }

    const onItemCreate = () => {
        dispatch(createItem())
    }

    const onOptionChange = (propData: any) => {
        const {name, value} = propData
        dispatch(handleChange({inputName: name, inputValue: value}))
    }

    const onFormSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addInvoice())
        dispatch(closeForm())
    }


    return (
        <form className={`invoice-form ${showForm ? "show" : ""}`} onSubmit={onFormSubmit}>
            <div className="invoice-form-center">
                <div className="invoice-form-status">
                    <p>{isEditing ? `Edit #${invoice.id}` : "New Invoice"}</p>
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
                    <FormRow label="Street Addess"
                        name="street"
                        type="client"
                        onChange={onAddressChange}
                        value={invoice.clientAddress.street}
                    />
                    <div className="invoice-group">
                        <FormRow label="City"
                            name="city"
                            type="client"
                            onChange={onAddressChange}
                            value={invoice.clientAddress.city}
                        />
                        <FormRow label="Post Code"
                            name="postCode"
                            type="client"
                            onChange={onAddressChange}
                            value={invoice.clientAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="country"
                            type="client"
                            onChange={onAddressChange}
                            value={invoice.clientAddress.country}
                        />
                    </div>
                </div>

                {/*BILL TO*/}
                <h3>Bill to</h3>
                <div className="invoice-form__to">
                    <FormRow label="Client’s Name"
                        name="clientName"
                        onChange={onChange}
                        value={invoice.clientName}
                    />
                    <FormRow label="Client’s Email"
                        name="clientEmail"
                        onChange={onChange}
                        value={invoice.clientEmail}
                    />
                    <FormRow label="Street Address"
                        name="street"
                        type="sender"
                        onChange={onAddressChange}
                        value={invoice.senderAddress.street}
                    />
                    <div className="invoice-group">
                        <FormRow label="City"
                            name="city"
                            onChange={onAddressChange}
                            value={invoice.senderAddress.city}
                        />
                        <FormRow label="Post Code"
                            name="postCode"
                            onChange={onAddressChange}
                            value={invoice.senderAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="country"
                            onChange={onAddressChange}
                            value={invoice.senderAddress.country}
                        />
                    </div>
                </div>

                {/*BILL DATE*/}
                <div>
                    <div className="invoice-group">
                        <FormRowDate label="Invoice Due Date"
                            name="paymentDue"
                            value={invoice.paymentDue}
                            onChange={onChange}
                        />
                        <FormRowSelect
                            label="Payment Terms"
                            onChange={onOptionChange}
                        />
                    </div>
                    <div>
                        <FormRow label="Project Description"
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
    )
}

export default InvoiceForm
