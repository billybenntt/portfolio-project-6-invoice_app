import {Invoice} from "../types/global";
import {Item} from "../types/global";

export class InvoiceCreator {

    private invoice: Invoice

    constructor(item: Invoice) {
        this.invoice = item
        this.showCartItems()
    }


    generateInvoiceId() {

    }


    addItem(invoiceItem: Item) {
        this.invoice.items.push(invoiceItem)
    }


    showCartItems() {
        console.log(this.invoice.items)
    }


}

