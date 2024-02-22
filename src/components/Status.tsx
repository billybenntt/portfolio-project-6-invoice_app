function Status(props: any) {

    const {invoiceStatus} = props

    return (
        <div className={`status ${invoiceStatus}`}>
            <span className="status-icon"></span>
            <span className="text-lg">{invoiceStatus}</span>
        </div>
    )
}

export default Status
