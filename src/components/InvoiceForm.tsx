import FormRow from "./subcomponents/FormRow.tsx";
import IconArrowLeft from '../assets/icon-arrow-left.svg'
import FormRowDate from "./subcomponents/FormRowDate.tsx";
import FormRowSelect from "./subcomponents/FormRowSelect.tsx";


function InvoiceForm() {


    const showBar = "show"

    return (
        <div className={`invoice-form ${showBar}`}>
            <div className="invoice-form-center">


                <div className="invoice-form-return" onClick={() => console.log("back")}>
                    <span>
                        <img src={IconArrowLeft} alt="icon-back"/>
                    </span>
                    <h4>Go back</h4>
                </div>


                <h3>Bill From</h3>
                {/*BILL FROM*/}
                <div className="invoice-form__from">
                    <div>
                        <FormRow label="Street Addess"/>
                    </div>
                    <div>
                        <FormRow label="City"/>
                        <FormRow label="Post Code"/>
                    </div>
                    <div>
                        <FormRow label="Country"/>
                    </div>
                </div>

                {/*BILL TO*/}

                <h3>Bill to</h3>

                <div className="invoice-form__to">
                    <div>
                        <FormRow label="Client’s Name"/>
                    </div>
                    <div>
                        <FormRow label="Client’s Email"/>
                    </div>
                    <div>
                        <FormRow label="Street Addess"/>
                    </div>
                    <div>
                        <FormRow label="City"/>
                        <FormRow label="Post Code"/>
                    </div>
                    <div>
                        <FormRow label="Country"/>
                    </div>
                </div>

                {/*BILL DATE*/}

                <div>
                    <div>
                        <FormRowDate label="Invoice Date"/>
                    </div>
                    <div>
                        <FormRowSelect label="Payment Terms"/>
                    </div>
                    <div>
                        <FormRow label="Project Description"/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default InvoiceForm
