import InvoiceList from "../components/InvoiceList.tsx";
import InvoiceForm from "../components/InvoiceForm.tsx";

function InvoicesMainPage() {


    return (
        <>
            <InvoiceForm/>
            <main className="main-container">
                <InvoiceList/>
            </main>
        </>
    )
}

export default InvoicesMainPage
