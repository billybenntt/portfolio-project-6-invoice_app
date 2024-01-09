import data from "../data/sampleAllData.tsx";
import InvoiceListItem from "./InvoiceListItem.tsx";
import IconPlus from '../assets/icon-plus.svg'

function InvoiceList() {

    const invoices = data
    const showInvoices = invoices.length > 0

    const invoiceListItems = invoices.map((item) => {
        return <InvoiceListItem key={item.id} {...item}/>
    })

    return (
        <section className="invoice-list">
            <div className="invoice-list__header">
                <div>
                    <h1 className="text-xxl">Invoices</h1>
                    <p className="invoice-list__amount">
                        There are 7 total invoices
                    </p>
                </div>
                <div className="invoice-list__filter">
                    <h5 className="">Filter by status</h5>
                    <span>🔽</span>
                </div>
                <div className="invoice-list__create">
                    <button className="btn btn-primary-1">
                    <span className="btn-img">
                    <img src={IconPlus} alt="icon"/>
                    </span>
                        <span className="text-lg">New Invoice</span>
                    </button>
                </div>
            </div>

            {
                showInvoices ? (
                    <ul className="invoice-list__container" style={{border: "1px solid black"}}>
                        {invoiceListItems}
                    </ul>
                ) : (
                    <div className="invoice-list__none">
                        <button>empty illustration</button>
                        <h2 className="invoice-list__none-title">There is nothing here</h2>
                        <p>
                            Create an invoice by clicking the{" "}
                            <span>New Invoice</span> button and get started
                        </p>
                    </div>
                )
            }
        </section>
    )
        ;
}

export default InvoiceList;
