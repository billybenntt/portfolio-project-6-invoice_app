import sampleAllData from "../data/sampleAllData.tsx";

function InvoiceCard() {
    const invoice = sampleAllData[2];
    const {
        id,
        description,
        status,
        senderAddress,
        createdAt,
        paymentDue
    } = invoice;
    const {
        street,
        postCode,
        city,
        country
    } = senderAddress;

    return (
        <section className="invoice-card">
            <div className="invoice-card__container-mobile">
                <div className="mobile-menu-absolute-container">
                    <div className="buttons-menu buttons-menu--mobile">
                        <button className="primary-button default">
                            <span>Edit</span>
                        </button>
                        <button className="primary-button danger">
                            <span>Delete</span>
                        </button>
                        <button className="primary-button">
                            <span>Mark as paid</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="invoice-card__container">

                {/*PREVIOUS PAGE */}
                <div>
                    <span>Go Back</span>
                </div>

                {/*HEADER */}
                <div className="invoice-card__header">
                    <span>Status</span>

                    {invoice &&
                      <div className={"status invoice-status" + status}>
                        <div className="status-container">
                          <span className="status-point"/>
                          <span className="status-text">{status}</span>
                        </div>
                      </div>
                    }

                    <div>
                        <button>
                            <span>Edit</span>
                        </button>
                        <button>
                            <span>Delete</span>
                        </button>
                        <button>
                            <span>Mark as Paid</span>
                        </button>
                    </div>
                </div>

                {/*BODY */}
                <div className="invoice-card__body">

                    {/*INVOICE TOP*/}
                    {invoice &&
                      <div className="flex-row invoice-top">
                        <div className="flex-col">
                          <span>#{id}</span>
                          <span className="1">{description}</span>
                        </div>
                        <div className="invoice-address">
                          <span>{invoice && street}</span>
                          <span>{invoice && city}</span>
                          <span>{invoice && postCode}</span>
                          <span>{invoice && country}</span>
                        </div>
                      </div>
                    }

                    {/*INVOICE DETAILS*/}
                    {invoice &&
                      <div className="flex-row invoice-mid">
                        <div className="flex-col">
                          <div className="flex-col">
                            <span>Invoice Date</span>
                            <span className="item-title ">{createdAt}</span>
                          </div>
                          <div className="flex-col">
                            <span>Payment Due</span>
                            <span>{paymentDue}</span>
                          </div>
                        </div>

                        <div className="flex-col">
                          <span>Bill To</span>
                          <span>{invoice && invoice["clientName"]}</span>
                          <span>{invoice && invoice["clientAddress"]["street"]}</span>
                          <span>{invoice && invoice["clientAddress"]["city"]}</span>
                          <span>{invoice && invoice["clientAddress"]["postCode"]}</span>
                          <span>{invoice && invoice["clientAddress"]["country"]}</span>
                        </div>

                        <div className="flex-col">
                          <span>Sent to</span>
                          <span>
                              {invoice && invoice["clientEmail"]}
                            </span>
                        </div>
                      </div>
                    }

                    {/*INVOICE BREAKDOWN*/}

                    {invoice &&
                      <div className="flex-col invoice-items-balance">
                        <ul className="flex-col invoice-list-container">
                          <li className="flex-row flex-row--center invoice-list-item">
                            <span className=" invoice-list-name">Item Name</span>
                            <span className="invoice-list-quantity">QTY.</span>
                            <span className="invoice-list-price">Price</span>
                            <span className="invoice-list-total">Total</span>
                          </li>
                          <div className="invoice-dynamic-items-container" key={1}>
                              {/* Desktop */}
                            <li
                              key={1 + "d"}
                              className="flex-row flex-row--center invoice-list-item"
                              tabIndex={0}>
                              <span className="invoice-list-name">
                                {"item.name"}
                              </span>
                              <span className="invoice-list-quantity">
                                {200}
                              </span>
                              <span className="invoice-list-price">
                                <span className="extra-space">NTD </span>
                                  {200}
                              </span>
                              <span className="invoice-list-total">
                                <span className="extra-space">NTD </span>
                                  {4000}
                              </span>
                            </li>

                              {/* Mobile */}
                            <li key={1 + "m"}
                              className="flex-row flex-row--center invoice-list-item-mobile"
                              tabIndex={0}>
                              <div className="flex-col">
                                <span className="invoice-list-name">
                                  {200}
                                </span>
                                <span className="bold">
                                  {200} x <span className="extra-space">£</span>{200}
                                </span>
                              </div>
                              <span className="invoice-list-total">
                                <span className="extra-space">£ </span>
                                  {4000}
                              </span>
                            </li>

                          </div>
                        </ul>

                          {/*INVOICE TOTAL*/}
                        <div>
                          <span>Amount Due</span>
                          <span> {invoice.total}</span>
                        </div>

                      </div>
                    }

                </div>
            </div>
        </section>
    );
}

export default InvoiceCard;
