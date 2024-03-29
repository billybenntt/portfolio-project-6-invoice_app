import {useEffect} from "react";
import {Invoice} from "@/types/app.definitions.ts";
import {ImageNoInvoices} from '@/assets/images'
import {FilterAlt, Button, InvoiceListItem} from "@/components";
import {useAppDispatch, useAppSelector} from '@/store/hooks.ts';
import {setFormInvoice, openForm} from "@/store/features/Form/formSlice.ts";
import {getAllInvoices} from "@/store/features/Invoice/invoiceSlice.ts";


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
                        {/*INVOICE COUNT*/}
                        {
                            allInvoices.length === 0 ?
                                (<p>No invoices</p>)
                                :
                                (
                                    <>
                                        <p className="mobile">
                                            {allInvoices.length} {allInvoices.length === 1 ? 'invoice' : 'invoices'}
                                        </p>
                                        <p className="desktop">
                                            There {allInvoices.length === 1 ? 'is' : 'are'} {allInvoices.length} total {allInvoices.length === 1 ? 'invoice' : 'invoices'}
                                        </p>
                                    </>
                                )
                        }
                    </div>
                    <div className="invoice-list__control">
                        <FilterAlt/>

                        <div className="control__create">
                            <Button text="New"
                                variation="primary-icon"
                                showSize="mobile"
                                type="button"
                                onClick={handleFormCreate}/>

                            <Button text="New invoice"
                                variation="primary-icon"
                                showSize="desktop"
                                type="button"
                                onClick={handleFormCreate}/>
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
