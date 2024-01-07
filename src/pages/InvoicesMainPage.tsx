import Navbar from "../components/Navbar.tsx";
import InvoiceList from "../components/InvoiceList.tsx";

function InvoicesMainPage() {

    const isLoading = false

    return (
        <div>
            <Navbar/>
            <section className="main-container">
                {isLoading ? <h1>Loading</h1> : <InvoiceList/>}
            </section>
        </div>
    )
}

export default InvoicesMainPage
