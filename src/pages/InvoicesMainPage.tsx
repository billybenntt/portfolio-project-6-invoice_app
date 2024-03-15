import {InvoiceList, InvoiceForm} from "@/components/";


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
