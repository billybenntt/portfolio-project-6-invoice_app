import InvoiceCard from "../components/InvoiceCard.tsx";
import InvoiceForm from "../components/InvoiceForm.tsx";
import Modal from "../components/ui/Modal.tsx";


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
