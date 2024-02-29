import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { InvoicesMainPage, InvoicesSinglePage} from "./pages";
import {Navbar} from "./components";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<InvoicesMainPage/>}/>
                <Route path='invoice/:id' element={<InvoicesSinglePage/>}/>
                <Route path='*' element={<InvoicesMainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
