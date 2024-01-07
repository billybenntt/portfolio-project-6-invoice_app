import Navbar from "../components/Navbar.tsx";
import InvoiceCard from "../components/InvoiceCard.tsx";
import invoice from "../data/sampleAllData.tsx";


function InvoicesSinglePage() {


    const isLoading = false

    return (
        <>
            <Navbar/>
            <main className="main-container">
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    <>
                        {Object.keys(invoice).length ? (
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
