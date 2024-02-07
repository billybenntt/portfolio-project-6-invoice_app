import EmptyPage from "./pages/EmptyPage.tsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InvoicesMainPage from "./pages/InvoicesMainPage.tsx";
import InvoicesSinglePage from "./pages/invoicesSinglePage.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<InvoicesMainPage/>}/>
                <Route path='invoice/:id' element={<InvoicesSinglePage/>}/>
                <Route path='*' element={<EmptyPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
