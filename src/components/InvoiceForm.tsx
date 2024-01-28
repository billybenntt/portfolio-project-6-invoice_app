import FormRow from "./subcomponents/FormRow.tsx";
import IconArrowLeft from '../assets/icon-arrow-left.svg'
import IconPlus from '../assets/icon-plus.svg'
import FormRowDate from "./subcomponents/FormRowDate.tsx";
import FormRowSelect from "./subcomponents/FormRowSelect.tsx";
import FormListItem from "./subcomponents/FormListItem.tsx";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {closeForm} from "../features/Invoice/invoiceSlice.tsx";
import React, {useState} from "react";

function InvoiceForm() {


    const {showForm, isEditing, singleInvoice} = useAppSelector(store => store.invoice)
    const dispatch = useAppDispatch()



    

    // LOCAL FORM STATE
    const [invoice, setInvoice] = useState(singleInvoice);


    // CLOSE FORM
    const handleFormClose = () => {
        dispatch(closeForm())
    }

    // UPDATE / CREATE INVOICE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName: string[] = (e.target.name).split(".")
        const inputValue = e.target.value

        if (inputName.length === 2) {
            setInvoice({
                ...invoice,
                [inputName[0]]: {
                    [inputName[1]]: inputValue
                }
            })
        }
        setInvoice({
            ...invoice,
            [inputName[0]]: inputValue
        })

    }


    const handleItemChange = (updatedItem, index) => {
        // Make a copy of items
        const updatedItems = [...invoice.items];

        // Update the index
        updatedItems[index] = updatedItem;

        console.log(updatedItem)
        console.log(index)


        // Update the main state
        setInvoice(prevState => ({
            ...prevState,
            items: updatedItems
        }));
    };


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
                        name="clientAddress.street"
                        handleChange={handleChange}
                        value={invoice.clientAddress.street}
                    />
                    <div className="invoice-group">
                        <FormRow label="City"
                            name="clientAddress.city"
                            handleChange={handleChange}
                            value={invoice.clientAddress.city}
                        />
                        <FormRow label="Post Code"
                            name="clientAddress.postCode"
                            handleChange={handleChange}
                            value={invoice.clientAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="clientAddress.country"
                            handleChange={handleChange}
                            value={invoice.clientAddress.country}
                        />
                    </div>
                </div>

                {/*BILL TO*/}
                <h3>Bill to</h3>
                <div className="invoice-form__to">
                    <FormRow label="Client’s Name"
                        name="clientName"
                        handleChange={handleChange}
                        value={invoice.clientName}
                    />
                    <FormRow label="Client’s Email"
                        name="clientEmail"
                        handleChange={handleChange}
                        value={invoice.clientEmail}
                    />


                    <FormRow label="Street Address"
                        name="senderAddress.street"
                        handleChange={handleChange}
                        value={invoice.senderAddress.street}
                    />

                    <div className="invoice-group">
                        <FormRow label="City"
                            name="senderAddress.city"
                            handleChange={handleChange}
                            value={invoice.senderAddress.city}
                        />

                        <FormRow label="Post Code"
                            name="senderAddress.postCode"
                            handleChange={handleChange}
                            value={invoice.senderAddress.postCode}
                        />
                        <FormRow label="Country"
                            name="senderAddress.country"
                            handleChange={handleChange}
                            value={invoice.senderAddress.country}
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
                            handleChange={handleChange}
                            value={invoice.description}
                        />
                    </div>
                </div>

                {/*ITEM LIST*/}

                <h4 className="text-lg-alt text-light-1">Item List</h4>
                <div>
                    <div>
                        {invoice.items.map((item, index) => (
                            <FormListItem
                                key={index}
                                id={index}
                                {...item}
                                handleChange={(updatedItem) => handleItemChange(updatedItem, index)}
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
