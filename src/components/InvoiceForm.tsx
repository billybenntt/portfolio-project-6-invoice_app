import FormRow from "./subcomponents/FormRow.tsx";
import IconArrowLeft from '../assets/icon-arrow-left.svg'
import IconPlus from '../assets/icon-plus.svg'
import FormRowDate from "./subcomponents/FormRowDate.tsx";
import FormRowSelect from "./subcomponents/FormRowSelect.tsx";
import FormListItem from "./subcomponents/FormListItem.tsx";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {closeForm} from "../features/Invoice/invoiceSlice.tsx";
import {handleAddressChange, handleChange} from "../features/Form/formSlice.tsx";

function InvoiceForm() {

    const dispatch = useAppDispatch()
    const {showForm, isEditing} = useAppSelector(store => store.invoice)
    const {singleInvoice, clientAddress, senderAddress, items} = useAppSelector(store => store.form)


    // CLOSE FORM
    const handleFormClose = () => {
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


    return (
        <div className={`invoice-form ${showForm ? "show" : ""}`}>
            <div className="invoice-form-center">
                <div className="invoice-form-status">
                    <p>{isEditing ? `Edit #${singleInvoice.id}` : "New Invoice"}</p>
                </div>

                <div className="invoice-form-return mobile" onClick={handleFormClose}>
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
                        value={clientAddress.street}
                    />
                    <div className="invoice-group">
                        <FormRow label="City"
                            name="city"
                            type="client"
                            onChange={onAddressChange}
                            value={clientAddress.city}
                        />
                        <FormRow label="Post Code"
                            name="postCode"
                            type="client"
                            onChange={onAddressChange}
                            value={clientAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="country"
                            type="client"
                            onChange={onAddressChange}
                            value={clientAddress.country}
                        />
                    </div>
                </div>

                {/*BILL TO*/}
                <h3>Bill to</h3>
                <div className="invoice-form__to">
                    <FormRow label="Client’s Name"
                        name="clientName"
                        onChange={onChange}
                        value={singleInvoice.clientName}
                    />
                    <FormRow label="Client’s Email"
                        name="clientEmail"
                        onChange={onChange}
                        value={singleInvoice.clientEmail}
                    />


                    <FormRow label="Street Address"
                        name="street"
                        type="sender"
                        onChange={onAddressChange}
                        value={senderAddress.street}
                    />

                    <div className="invoice-group">
                        <FormRow label="City"
                            name="city"
                            onChange={onAddressChange}
                            value={senderAddress.city}
                        />

                        <FormRow label="Post Code"
                            name="postCode"
                            onChange={onAddressChange}
                            value={senderAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="country"
                            onChange={onAddressChange}
                            value={senderAddress.country}
                        />
                    </div>
                </div>

                {/*BILL DATE*/}
                <div>
                    <div className="invoice-group">
                        <FormRowDate label="Invoice Date"/>
                        <FormRowSelect label="Payment Terms"/>
                    </div>
                    <div>
                        <FormRow label="Project Description"
                            name="description"
                            onChange={onChange}
                            value={singleInvoice.description}
                        />
                    </div>
                </div>

                {/*ITEM LIST*/}

                <h4 className="text-lg-alt text-light-1">Item List</h4>
                <div>
                    <div>
                        {items.map((item: any, index: number) => (
                            <FormListItem
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>

                    {/*ADD MORE ITEMS */}
                    <button className="btn btn-accent-3">
                        <img src={IconPlus} alt="icon"/>
                        <span className="text-lg">Add New Item</span>
                    </button>
                </div>
            </div>


            {/*BUTTONS */}
            <div className="invoice-form__controls">
                {isEditing ? (<div className="controls__edit">
                        <button className="btn btn-accent-1" onClick={handleFormClose}>
                            <span className="text-lg">Cancel</span>
                        </button>
                        <button className="btn btn-primary-2">
                            <span className="text-lg">Save Changes</span>
                        </button>
                    </div>) :
                    <div className="controls__create">
                        <button className="btn btn-accent-1" onClick={handleFormClose}>
                            <span className="text-lg">Discard</span>
                        </button>
                        <button className="btn btn-accent-2">
                            <span className="text-lg">Save as Draft</span>
                        </button>
                        <button className="btn btn-primary-2">
                            <span className="text-lg">Save and Send</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default InvoiceForm
