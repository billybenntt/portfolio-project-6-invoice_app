import Navbar from "../components/Navbar.tsx";
import InvoiceCard from "../components/InvoiceCard.tsx";
import invoice from "../data/sampleAllData.tsx";
import InvoiceForm from "../components/InvoiceForm.tsx";
import Modal from "../components/Modal.tsx";


function InvoicesSinglePage() {

    const isLoading = false
    const showModal = false
    const showInvoices = Object.keys(invoice).length > 0

    return (
        <>
            <Navbar/>
            <InvoiceForm/>
            {showModal && <Modal/>}
            <main className="main-container">
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    <>
                        {showInvoices ? (
                            <InvoiceCard/>
                        ) : (
                            <h1>No Invoice</h1>
                        )}
                    </>
                )}
            </main>
        </>
    )
}

export default InvoicesSinglePage
