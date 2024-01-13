import EmptyPage from "./pages/EmptyPage.tsx";
// import InvoicesMainPage from "./pages/InvoicesMainPage.tsx";
import InvoicesSinglePage from "./pages/invoicesSinglePage.tsx";

function App() {

    const isActive = false
    const selectPage = isActive ? <EmptyPage/> : <InvoicesSinglePage/>
    return (
        <>
            {selectPage}

        </>
    )
}

export default App
