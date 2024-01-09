
type Status = {
    status: string,
    text: string
}


function Status(props: Status) {

    const {status, text} = props

    return (
        <div className={`status ${status} success`}>
            <span className="status-icon"></span>
            <span className="text-lg">{text}</span>
        </div>
    )
}

export default Status
