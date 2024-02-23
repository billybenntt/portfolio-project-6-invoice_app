import {Item, Invoice, Address} from "../types/app";


export class InvoiceCreator {
    private readonly invoice: Invoice;

    // Get Data from Outside
    constructor(invoiceData: any) {
        this.invoice = {
            invoice_id: invoiceData.id || this.generateInvoiceID(),
            createdAt: invoiceData.createdAt || "",
            paymentDue: invoiceData.paymentDue || "",
            description: invoiceData.description || "",
            paymentTerms: invoiceData.paymentTerms || 1,
            clientName: invoiceData.clientName || "",
            clientEmail: invoiceData.clientEmail || "",
            status: invoiceData.status || "draft",
            senderAddress: this.verifyAddress(invoiceData.senderAddress),
            clientAddress: this.verifyAddress(invoiceData.clientAddress),
            items: this.verifyItems(invoiceData.items),
            total: invoiceData.total || 0,
        };
    }


    // If Address fields are valid copy them else initialize to empty ""
    private verifyAddress(addressData: any): Address {
        return {
            street: addressData?.street || "",
            city: addressData?.city || "",
            postCode: addressData?.postCode || "",
            country: addressData?.country || "",
        };
    }

    // If Incoming Data is valid copy it else initialize an empty array.
    private verifyItems(itemsData: any): Item[] {
        return Array.isArray(itemsData) ? [...itemsData] : [];
    }

    // method to recalculate grand total.
    private calculateTotal(itemsData: Item[]) {
        const result = itemsData.reduce((total: number, item: Item) => {
            const {price, quantity} = item
            if (quantity) {
                total += (price * quantity);
            }
            return total;
        }, 0)
        return Math.trunc(result)
    }

    // method to generate an invoice id for new invoices
    private generateInvoiceID() {
        const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const firstPart: string = letters.charAt(Math.floor(Math.random() * letters.length));
        const secondPart: string = letters.charAt(Math.floor(Math.random() * letters.length));
        const thirdPart: number = Math.floor(Math.random() * 9999) + 1000
        return `${firstPart}${secondPart}${thirdPart}`
    }


    // Method to add an item to the items array and recalculate total.
    public addInvoiceItem(item: Item): void {
        this.invoice.items.push(item);
        this.invoice.total = this.calculateTotal(this.invoice.items)
    }

    // Create a Valid Invoice
    public createInvoice() {
        this.invoice.createdAt = new Date().toISOString().substring(0, 10)
        this.invoice.paymentDue = new Date().toISOString().substring(0, 10);
        return this.invoice;
    }

}
