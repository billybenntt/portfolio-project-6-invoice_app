import Status from "./Status.tsx";


interface Invoice {
    id: string,
    paymentDue: string,
    clientName: string,
    total: number,
    status: "paid" | "pending" | "draft"
}

function InvoiceListItem(props: Invoice) {

    const {id, paymentDue, clientName, total, status} = props

    return (
        <li className="invoice-list__item"
            tabIndex={0}
            key={id}
            onClick={() => console.log(1)}>

            <div className="item__group">
                <h4>
                    <span className="text-light-1">#</span>{id}
                </h4>
                <p>{paymentDue}</p>
                <h4>NTD {total}</h4>
            </div>


            <div className="item__group">
                <p>{clientName}</p>
                <Status status={status}/>
            </div>


        </li>
    )
}

export default InvoiceListItem
