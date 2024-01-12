import Navbar from "../components/Navbar.tsx";
// import IconPlus from '../assets/icon-plus.svg'
import InvoiceForm from "../components/InvoiceForm.tsx";
import FormRow from "../components/subcomponents/FormRow.tsx";
import FormRowSelect from "../components/subcomponents/FormRowSelect.tsx";

function InvoicesMainPage() {


    return (
        <>
            <Navbar/>
            <InvoiceForm/>
            <main className="main-container" style={{backgroundColor: "white"}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: "3rem"}}>
                    {/*<button className="btn btn-primary-1">*/}
                    {/*<span className="btn-img">*/}
                    {/*<img src={IconPlus} alt="icon"/>*/}
                    {/*</span>*/}
                    {/*    <span className="text-lg">New Invoice</span>*/}
                    {/*</button>*/}

                    {/*<button className="btn btn-primary-2">*/}
                    {/*    <span className="text-lg">Mark As Paid</span>*/}
                    {/*</button>*/}

                    {/*<button className="btn btn-danger-1">*/}
                    {/*    <span className="text-lg">Delete</span>*/}
                    {/*</button>*/}

                    {/*<button className="btn btn-accent-1">*/}
                    {/*    <span className="text-lg">Edit</span>*/}
                    {/*</button>*/}

                    {/*<button className="btn btn-accent-2">*/}
                    {/*    <span className="text-lg">Save as Draft</span>*/}
                    {/*</button>*/}

                    {/*<button className="btn btn-accent-3">*/}
                    {/*    <img src={IconPlus} alt="icon"/>*/}
                    {/*    <span className="text-lg">Add New Item</span>*/}
                    {/*</button>*/}

                    {/*<div className="status success">*/}
                    {/*    <span className="status-icon"></span>*/}
                    {/*    <span className="text-lg">Paid</span>*/}
                    {/*</div>*/}

                    {/*<div className="status warning">*/}
                    {/*    <span className="status-icon"></span>*/}
                    {/*    <span className="text-lg">Pending</span>*/}
                    {/*</div>*/}

                    {/*<div className="status draft">*/}
                    {/*    <span className="status-icon"></span>*/}
                    {/*    <span className="text-lg">Draft</span>*/}
                    {/*</div>*/}


                    <FormRow label="Something"/>
                    <FormRowSelect label="Payment Terms"/>


                    <div className="form__row">
                        <label htmlFor="" className="form__label">Date</label>
                        <input type="date" className="form__input"/>
                    </div>


                </div>
            </main>
        </>
    )
}

export default InvoicesMainPage
