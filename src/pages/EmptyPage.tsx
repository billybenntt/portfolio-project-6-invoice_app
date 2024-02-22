import Navbar from "../components/Navbar.tsx";
import {InvoiceCreator} from "../data/InvoiceCreator.ts";
import SampleAllData from "../data/sampleAllData.tsx";
import FormRowRadix from "../components/ui/FormRowItem.tsx";


function InvoicesMainPage() {

    const testInvoice = SampleAllData[0]
    const blankInvoice = new InvoiceCreator(testInvoice)

    const testItem = {
        name: "extra item",
        quantity: 2,
        price: 3000.00,
        total: 6000.00
    }


    console.log(blankInvoice)
    blankInvoice.addInvoiceItem(testItem)
    console.log(blankInvoice)


    return (
        <>
            <Navbar/>
            <main className="main-container" style={{backgroundColor: "white"}}>


                <div className="containers">

                    <FormRowRadix/>


                </div>

            </main>
        </>
    )
}

export default InvoicesMainPage
