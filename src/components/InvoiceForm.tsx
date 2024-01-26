import FormRow from "./subcomponents/FormRow.tsx";
import IconArrowLeft from '../assets/icon-arrow-left.svg'
import IconPlus from '../assets/icon-plus.svg'
import FormRowDate from "./subcomponents/FormRowDate.tsx";
import FormRowSelect from "./subcomponents/FormRowSelect.tsx";
import FormListItem from "./subcomponents/FormListItem.tsx";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {closeForm} from "../features/Invoice/invoiceSlice.tsx";
import {useState} from "react";

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

    const handleChange = () => {
        console.log(invoice)
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
                    <FormRow label="Street Addess"/>
                    <div className="invoice-group">
                        <FormRow label="City"/>
                        <FormRow label="Post Code"/>
                        <FormRow label="Country"/>
                    </div>
                </div>

                {/*BILL TO*/}
                <h3>Bill to</h3>
                <div className="invoice-form__to">
                    <FormRow label="Client’s Name"/>
                    <FormRow label="Client’s Email"/>
                    <FormRow label="Street Addess"/>
                    <div className="invoice-group">
                        <FormRow label="City"/>
                        <FormRow label="Post Code"/>
                        <FormRow label="Country"/>
                    </div>
                </div>

                {/*BILL DATE*/}
                <div>
                    <div className="invoice-group">
                        <FormRowDate label="Invoice Date"/>
                        <FormRowSelect label="Payment Terms"/>
                    </div>
                    <div>
                        <FormRow label="Project Description"/>
                    </div>
                </div>

                {/*ITEM LIST*/}

                <h4 className="text-lg-alt text-light-1">Item List</h4>
                <div>
                    <div>
                        <FormListItem/>
                        <FormListItem/>
                        <FormListItem/>
                    </div>
                    <button className="btn btn-accent-3">
                        <img src={IconPlus} alt="icon"/>
                        <span className="text-lg">Add New Item</span>
                    </button>
                </div>
            </div>


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
