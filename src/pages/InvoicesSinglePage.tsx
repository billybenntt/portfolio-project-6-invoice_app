import {InvoiceCard, InvoiceForm, Modal} from "@/components/";


function InvoicesSinglePage() {

    return (
        <>
            <InvoiceForm/>
            <Modal/>
            <main className="main-container">
                <InvoiceCard/>
            </main>
        </>
    )
}

export default InvoicesSinglePage
