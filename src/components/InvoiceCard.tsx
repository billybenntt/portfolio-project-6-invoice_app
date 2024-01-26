import IconArrowLeft from '../assets/icon-arrow-left.svg'
import Status from "./subcomponents/Status.tsx";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {openForm, openModal, getSingleInvoice} from "../features/Invoice/invoiceSlice.tsx";
import {useEffect} from "react";
import {Invoice} from "../types/global";


function InvoiceCard() {

    const {id} = useParams()
    const dispatch = useAppDispatch()

    // LOAD CURRENT INVOICE ON COMPONENT START
    useEffect(() => {
        dispatch(getSingleInvoice({id}))
    }, [id]);


    // EDIT INVOICE
    const handleFormEdit = (id: string | undefined) => {
        dispatch(openForm({isEditing: true, id: id}))
    }

    // DELETE INVOICE AND OPEN MODAL
    const handleFormDelete = () => {
        dispatch(openModal())
    }


    const singleInvoice = useAppSelector(store => store.invoice.singleInvoice) as Invoice


    return (
        <section className="invoice-card">
            <div className="invoice-card-center">

                <div className="invoice-card__return">
                    <span>
                        <img src={IconArrowLeft} alt="icon-back"/>
                    </span>
                    <Link to={`/`}>
                        <h4>Go back</h4>
                    </Link>
                </div>

                <div className="invoice-card__header">
                    <div className="invoice-card__status">
                        <p>Status</p>
                        <Status invoiceStatus={singleInvoice.status}/>
                    </div>

                    {/* CARD CONTROLS DESKTOP*/}
                    <div className="invoice-card__controls desktop">
                        <div className="controls__center">
                            <div>
                                <button className="btn btn-accent-1" onClick={() => handleFormEdit(id)}>
                                    <span className="text-lg">Edit</span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-danger-1" onClick={() => handleFormDelete()}>
                                    <span className="text-lg">Delete</span>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-primary-2">
                                    <span className="text-lg">Mark As Paid</span>
                                </button>
                            </div>
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
                                {singleInvoice.id}
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

                        {/*MOBILE */}

                        <div className="invoice__subtotal mobile">
                            {/*DYNAMIC SIZE*/}
                            <div className="subtotal__item">
                                <div>
                                    <h4>Banner Design</h4>
                                    <h4>1 x £ 156.00</h4>
                                </div>
                                <h4>£ 156.00</h4>
                            </div>

                            <div className="subtotal__item">
                                <div>
                                    <h4>Banner Design</h4>
                                    <h4>1 x £ 156.00</h4>
                                </div>
                                <h4>£ 156.00</h4>
                            </div>

                        </div>


                        {/*DESKTOP */}
                        <div className="invoice__subtotal desktop">
                            <div className="subtotal__description">
                                <p>Item Name</p>
                                <p>QTY</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>

                            {/*DYNAMIC SIZE*/}

                            <div className="subtotal__item">
                                <h4>Banner Design</h4>
                                <h4>2</h4>
                                <h4>£156.00</h4>
                                <h4>£312.00</h4>
                            </div>

                            <div className="subtotal__item">
                                <h4>Banner Design</h4>
                                <h4>2</h4>
                                <h4>£156.00</h4>
                                <h4>£312.00</h4>
                            </div>
                        </div>


                        <div className="invoice__total">
                            <p className="mobile text-xl">Grand Total</p>
                            <h4 className="desktop">Amount due</h4>
                            <h2>£ 556.00</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD CONTROLS MOBILE*/}
            <div className="invoice-card__controls mobile">
                <div className="controls__center">
                    <div>
                        <button className="btn btn-accent-1">
                            <span className="text-lg">Edit</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-danger-1" onClick={() => handleFormDelete()}>
                            <span className="text-lg">Delete</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary-2">
                            <span className="text-lg">Mark As Paid</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InvoiceCard;
