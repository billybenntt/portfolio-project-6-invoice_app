import {useEffect} from "react";
import {Button, StatusTag} from "./";
import {Invoice} from "../types/app";
import {Link, useParams} from "react-router-dom";
import {IconArrowLeft} from '../assets'
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {setFormInvoice, openForm} from "../features/Form/formSlice.ts";
import {openModal, getSingleInvoice} from "../features/Invoice/invoiceSlice.ts";


function InvoiceCard() {

    const {id} = useParams()
    const dispatch = useAppDispatch()

    // LOAD CURRENT INVOICE ON COMPONENT START
    useEffect((): void => {
        dispatch(getSingleInvoice({id}))
    }, [dispatch, id]);


    // EDIT INVOICE
    const handleFormEdit = (id: string): void => {
        dispatch(openForm({isEditing: true, id: id}))
        dispatch(setFormInvoice("edit"))
    }

    // DELETE INVOICE AND OPEN MODAL
    const handleFormDelete = (): void => {
        dispatch(openModal())
    }


    const singleInvoice = useAppSelector(store => store.invoice.singleInvoice) as Invoice


    const itemList = singleInvoice.items.map((item, index) => {
        return <div className="subtotal__item" key={index}>
            <div className="mobile">
                <div>
                    <h4>{item.name}</h4>
                    <h3 className="text-lg text-light-1">{item.quantity} x {item.price} TWD</h3>
                </div>
                <h4>{item.quantity * item.price} TWD</h4>
            </div>

            <div className="desktop">
                <h4>{item.name}</h4>
                <h4>{item.quantity} Pcs.</h4>
                <h4>TWD {item.price}</h4>
                <h4>TWD {item.quantity * item.price}</h4>
            </div>
        </div>
    })


    return (
        <section className="invoice-card">
            <div className="invoice-card-center">
                <div className="invoice-card__return">
                            <span>
                               <IconArrowLeft/>
                            </span>
                    <Link to={`/`}>
                        <h4>Go back</h4>
                    </Link>
                </div>

                <div className="invoice-card__header">
                    <div className="invoice-card__status">
                        <p>Status</p>
                        <StatusTag invoiceStatus={singleInvoice.status}/>
                    </div>

                    {/* CARD CONTROLS DESKTOP*/}
                    <div className="invoice-card__controls desktop">
                        <div className="controls__center">
                            <Button text="Edit"
                                variation="light"
                                type="button"
                                onClick={() => handleFormEdit(id!)}/>
                            <Button text="Delete"
                                variation="danger"
                                type="button"
                                onClick={() => handleFormDelete()}/>

                            <Button text="Mark as paid"
                                variation="primary"
                                type="button"
                                onClick={() => console.log("Mark as paid")}/>

                        </div>
                    </div>
                </div>

                <div className="invoice-card__body">
                    <div className="card-group">
                        <div className="invoice__id">
                            <h4>
                                        <span className="text-light-1">
                                            #
                                        </span>
                                {singleInvoice.invoice_id}
                            </h4>
                            <p>{singleInvoice.description}</p>
                        </div>

                        <div className="invoice__sender">
                            <div>
                                <p>{singleInvoice.senderAddress.street}</p>
                                <p>{singleInvoice.senderAddress.city}</p>
                                <p>{singleInvoice.senderAddress.postCode}</p>
                                <p>{singleInvoice.senderAddress.country}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-group">
                        <div className="invoice__date">
                            <div>
                                <p>Invoice Date</p>
                                <h4>{singleInvoice.createdAt}</h4>
                            </div>
                            <div>
                                <p>Payment Due</p>
                                <h4>{singleInvoice.paymentDue}</h4>
                            </div>
                        </div>
                        <div className="invoice__recipient">
                            <div>
                                <p>Bill To</p>
                                <h4>{singleInvoice.clientName}</h4>
                            </div>
                            <div>
                                <p>{singleInvoice.clientAddress.street}</p>
                                <p>{singleInvoice.clientAddress.city}</p>
                                <p>{singleInvoice.clientAddress.postCode}</p>
                                <p>{singleInvoice.clientAddress.country}</p>
                            </div>
                        </div>

                        <div className="invoice__email">
                            <p>Sent to</p>
                            <h4>{singleInvoice.clientEmail}</h4>
                        </div>
                    </div>
                    <div className="card-group">

                        <div className="invoice__subtotal">
                            <div className="description desktop">
                                <p>Item Name</p>
                                <p>QTY</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>
                            {itemList}
                        </div>

                        <div className="invoice__total">
                            <p className="mobile">Grand Total</p>
                            <p className="desktop">Amount due</p>
                            <h2>TWD {singleInvoice.total}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD CONTROLS MOBILE*/}
            <div className="invoice-card__controls mobile">
                <div className="controls__center">
                    <Button text="edit"
                        variation="light"
                        type="button"
                        onClick={() => handleFormEdit(id!)}/>
                    <Button text="delete"
                        variation="danger"
                        type="button"
                        onClick={() => handleFormDelete()}/>

                    <Button text="mark as paid"
                        variation="primary"
                        type="button"
                        onClick={() => console.log("Mark as paid")}/>

                </div>
            </div>
        </section>
    );
}

export default InvoiceCard;
