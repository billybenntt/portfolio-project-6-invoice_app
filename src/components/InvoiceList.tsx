import data from "../data/sampleAllData.tsx";
import InvoiceListItem from "./InvoiceListItem.tsx";
import Button from './subcomponents/Button.tsx'
import IconArrowDown from '../assets/icon-arrow-down.svg'


function InvoiceList() {

    const invoices = data
    const showInvoices = invoices.length > 0

    const invoiceListItems = invoices.map((item: any) => {
        return <InvoiceListItem key={item.id} {...item}/>
    })

    return (
        <section className="invoice-list">
            <div className="invoice-list-center">
                <div className="invoice-list__header">
                    <div className="invoice-list__title">
                        <h2>Invoices</h2>
                        <p> Total invoices</p>
                    </div>

                    <div className="invoice-list__control">
                        <div className="control__filter">
                            <h3 className="text-lg">Filter</h3>
                            <span>
                            <img src={IconArrowDown} alt="icon-arrow"/>
                            </span>
                        </div>

                        <div className="control__create">
                            <Button text="new" type="1" show="mobile"/>
                            <Button text="new Invoice" type="1" show="desktop"/>
                        </div>
                    </div>
                </div>

                {showInvoices ? (
                    <ul className="invoice-list__container">
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
            </div>

        </section>
    )
}

export default InvoiceList;
