import {PropStatus} from "../../types/components";

function Status(props: PropStatus) {


    const {invoiceStatus} = props


    return (
        <div className={`status ${invoiceStatus}`}>
            <span className="status-icon"></span>
            <span className="text-lg">{invoiceStatus}</span>
        </div>
    )
}

export default Status
