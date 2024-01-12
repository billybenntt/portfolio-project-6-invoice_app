import Navbar from "../components/Navbar.tsx";
import InvoiceList from "../components/InvoiceList.tsx";

function InvoicesMainPage() {

    const isLoading = false

    return (
        <>
            <Navbar/>

            <main className="main-container">
                {isLoading ? <h1>Loading</h1> : <InvoiceList/>}
            </main>
        </>
    )
}

export default InvoicesMainPage
