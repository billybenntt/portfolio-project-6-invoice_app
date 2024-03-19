import {InvoiceStatus} from "@/types/app.definitions.ts";

interface IProps {
    invoiceStatus: InvoiceStatus
}

function StatusTag(props: IProps) {

    const {invoiceStatus} = props

    return (
        <div className={`status ${invoiceStatus}`}>
            <span className="status-icon"></span>
            <span className="text-lg">{invoiceStatus}</span>
        </div>
    )
}

export default StatusTag
