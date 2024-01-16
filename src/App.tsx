// import EmptyPage from "./pages/EmptyPage.tsx";
import InvoicesMainPage from "./pages/InvoicesMainPage.tsx";
import InvoicesSinglePage from "./pages/invoicesSinglePage.tsx";
import InvoiceForm from "./components/InvoiceForm.tsx";

function App() {

    const isActive = false
    const selectPage = isActive ? <InvoicesMainPage/> : <InvoicesSinglePage/>
    return (
        <>
            {0 && <InvoiceForm/>}
            {selectPage}

        </>
    )
}

export default App
