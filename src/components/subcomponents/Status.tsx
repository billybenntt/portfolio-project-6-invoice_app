
type Status = {
    status: "paid" | "pending" | "draft"
}


function Status(props: Status) {

    const {status} = props

    return (
        <div className={`status ${status}`}>
            <span className="status-icon"></span>
            <span className="text-lg">{status}</span>
        </div>
    )
}

export default Status
