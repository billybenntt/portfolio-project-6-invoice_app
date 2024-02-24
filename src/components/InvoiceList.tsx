import {useEffect} from "react";
import {Invoice} from "../types/app";
import {ImageNoInvoices} from '../assets/'
import {Filter, Button, InvoiceListItem} from "./";
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {setFormInvoice, openForm} from "../features/Form/formSlice.ts";
import {getAllInvoices} from "../features/Invoice/invoiceSlice.ts";


function InvoiceList() {

    const {allInvoices} = useAppSelector(store => store.invoice)
    const showInvoices = allInvoices.length > 0
    const dispatch = useAppDispatch()

    useEffect((): void => {
        dispatch(getAllInvoices())
    }, []);


    // CREATE NEW INVOICE
    const handleFormCreate = (): void => {
        dispatch(openForm({isEditing: false}))
        dispatch(setFormInvoice("new"))
    }


    const invoiceListItems = allInvoices.map((item: Invoice) => {
        return <InvoiceListItem key={item.invoice_id} {...item}/>
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
                        <Filter/>
                        <div className="control__create" onClick={handleFormCreate}>
                            <Button text="new" type="1" show="mobile" style="primary"/>
                            <Button text="new Invoice" type="1" show="desktop" style="primary"/>
                        </div>
                    </div>
                </div>

                {showInvoices ? (
                    <ul className="invoice-list__container">
                        {invoiceListItems}
                    </ul>
                ) : (
                    <div className="invoice-list__empty">
                        <img src={ImageNoInvoices} alt="img-no_invoice"/>
                        <h2>There is nothing here</h2>
                        <p> Create an invoice by clicking the New Invoice button and get started</p>
                    </div>
                )
                }
            </div>
        </section>
    )
}

export default InvoiceList;
