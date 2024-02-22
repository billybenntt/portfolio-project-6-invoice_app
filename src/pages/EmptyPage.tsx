import {FormRowItem, Navbar} from "../components/";
import {InvoiceCreator} from "../utils/InvoiceCreator.ts";
import SampleAllData from "../utils/placeholderData.ts";


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

                    <FormRowItem/>


                </div>

            </main>
        </>
    )
}

export default InvoicesMainPage
