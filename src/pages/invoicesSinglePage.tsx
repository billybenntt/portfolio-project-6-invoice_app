import InvoiceCard from "../components/InvoiceCard.tsx";
import InvoiceForm from "../components/InvoiceForm.tsx";


function InvoicesSinglePage() {

    return (
        <>
            <InvoiceForm/>
            <main className="main-container">
                <InvoiceCard/>

            </main>
        </>
    )
}

export default InvoicesSinglePage
