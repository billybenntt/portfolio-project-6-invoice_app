import {StatusTagProps} from "../types/app";

function StatusTag(props: StatusTagProps) {

    const {invoiceStatus} = props

    return (
        <div className={`status ${invoiceStatus}`}>
            <span className="status-icon"></span>
            <span className="text-lg">{invoiceStatus}</span>
        </div>
    )
}

export default StatusTag
