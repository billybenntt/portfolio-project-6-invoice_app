import IconArrowLeft from '../assets/icon-arrow-left.svg'
// import sampleAllData from "../data/sampleAllData.tsx";


import Status from "./subcomponents/Status.tsx";

function InvoiceCard() {
    // const invoice = sampleAllData[2];

    return (
        <section className="invoice-card">
            <div className="invoice-card-center">
                <div className="invoice-card__return">
                    <span>
                        <img src={IconArrowLeft} alt="icon-back"/>
                    </span>
                   <h4>Go back</h4>
                </div>

                <div className="invoice-card__header">
                    <div>
                        <p>Status</p>
                    </div>
                    <Status status="pending"/>
                </div>

                <div className="invoice-card__body">
                    <div className="body__group">
                        <div>
                            <h4>
                                <span className="text-light-1">
                                    #
                                </span>
                                XM9141
                            </h4>
                            <p>Graphic Design</p>
                        </div>
                        <div>
                            <div>
                                <p>19 Union Terrace</p>
                                <p>London</p>
                                <p>E1 3EZ</p>
                                <p>United Kingdom</p>
                            </div>
                        </div>
                    </div>

                    <div className="body__group">
                        <div>
                            <p>Invoice Date</p>
                            <h4>21 Aug 2021</h4>
                        </div>
                        <div>
                            <p>Payment Due</p>
                            <h4>20 Sep 2021</h4>
                        </div>

                        <div>
                            <p>Bill To</p>
                            <h4>Alex Grim</h4>
                        </div>
                        <div>
                            <p>84 Church Way</p>
                            <p>Bradford</p>
                            <p>BD1 9PB</p>
                            <p> United Kingdom </p>
                        </div>
                        <div>
                            <p>Sent to</p>
                            <h4>alexgrim@mail.com</h4>
                        </div>
                    </div>
                    <div className="body__group">
                        <div className="subtotal">subtotal</div>
                        <div className="total">total</div>
                    </div>
                </div>
            </div>

            <div className="invoice-card__controls mobile">
                invoice-card__controls
            </div>

        </section>
    );
}

export default InvoiceCard;
