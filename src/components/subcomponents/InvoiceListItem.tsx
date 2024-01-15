import Status from "./Status.tsx";
import IconArrowRight from '../../assets/icon-arrow-right.svg'

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
                <p>{paymentDue && "Due  19 Aug 2021"}</p>
                <p className="desktop">{clientName}</p>
                <h4 className="mobile">NTD {total}</h4>
            </div>


            <div className="item__group">
                <h4 className="desktop">NTD {total}</h4>
                <p className="mobile">{clientName}</p>
                <Status status={status}/>

                <div className="desktop">
                    <span>
                        <img src={IconArrowRight} alt="right"/>
                    </span>
                </div>
            </div>


        </li>
    )
}

export default InvoiceListItem
