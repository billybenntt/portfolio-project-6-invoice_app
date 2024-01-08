interface Invoice  {
    id: string,
    paymentDue: string,
    clientName: string,
    total: number,
    status: string
}

function InvoiceListItem(props: Invoice) {

    const {id, paymentDue, clientName, total, status} = props

    return (
        <li className="invoice-list__item"
            tabIndex={0}
            key={id}
            onClick={() => console.log(1)}>
            <div className="invoice-list__item-value">
                <span className="hash">#</span>
                {id}
            </div>
            <div className="invoice-list__item-value">
                <span>Due </span> {paymentDue}
            </div>
            <div className="invoice-list__item-value">
                {clientName}
            </div>

            <div className="invoice-list__item-value">
                  <span>
                    <span>Due</span>{" "}
                      {paymentDue}
                  </span>
                <span>
                    NTD{total}
                  </span>
            </div>

            <div className="invoice-list__item-value desktop">
                <span>NTD</span>
                {total}
            </div>

            <div className={"invoice-list__item-value invoice-status " + status}>
                <div className="status-container">
                    <span className="status-point"/>
                    <span className="status-text">{status}</span>
                </div>
            </div>
            <span className="invoice-list__item-value">
                <span>▶️</span>
            </span>
        </li>
    )
}

export default InvoiceListItem
