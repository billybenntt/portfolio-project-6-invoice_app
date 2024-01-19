import Navbar from "../components/Navbar.tsx";
import InvoiceCard from "../components/InvoiceCard.tsx";
import invoice from "../data/sampleAllData.tsx";


function InvoicesSinglePage() {
    const showInvoices = Object.keys(invoice).length > 0

    return (
        <>
            <Navbar/>


            <main className="main-container">
                {showInvoices ? (
                    <InvoiceCard/>
                ) : (
                    <h1>No Invoice</h1>
                )}

            </main>
        </>
    )
}

export default InvoicesSinglePage
