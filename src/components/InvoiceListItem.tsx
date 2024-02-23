import {StatusTag} from "./";
import {Invoice} from "../types/app";
import {Link} from 'react-router-dom'
import {IconArrowRight} from '../assets'


function InvoiceListItem(props: Partial<Invoice>) {

    const {invoice_id, paymentDue, clientName, total, status} = props

    return (
        <li tabIndex={0} key={invoice_id}>
            <Link to={`/invoice/${invoice_id}`} className="invoice-list__item">
                <div className="item__group">
                    <h4>
                        <span className="text-light-1">#</span>{invoice_id}
                    </h4>
                    <p>{paymentDue}</p>
                    <p className="desktop">{clientName}</p>
                    <h4 className="mobile">NTD {total}</h4>
                </div>
                <div className="item__group">
                    <h4 className="desktop">NTD {total}</h4>
                    <p className="mobile">{clientName}</p>
                    <StatusTag invoiceStatus={status!}/>
                    <div className="desktop">
                    <span>
                        <IconArrowRight/>
                    </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default InvoiceListItem
