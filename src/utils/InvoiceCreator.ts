import {
    Item,
    Invoice,
    Address
} from "../types/app";


export class InvoiceCreator {
    private readonly invoice: Invoice;

    // Get Data from Outside
    constructor(invoiceData: Invoice) {
        this.invoice = {
            invoice_id: invoiceData.invoice_id || this.generateInvoiceID(),
            createdAt: invoiceData.createdAt || "",
            paymentDue: invoiceData.paymentDue || "",
            description: invoiceData.description || "",
            paymentTerms: invoiceData.paymentTerms || 1,
            clientName: invoiceData.clientName || "",
            clientEmail: invoiceData.clientEmail || "",
            status: invoiceData.status || "pending",
            senderAddress: this.verifyAddress(invoiceData.senderAddress),
            clientAddress: this.verifyAddress(invoiceData.clientAddress),
            items: this.verifyItems(invoiceData.items),
            total: invoiceData.total || 0,
        };
    }


    // If Address fields are valid copy them else initialize to empty ""
    private verifyAddress(addressData: Address): Address {
        return {
            street: addressData?.street || "",
            city: addressData?.city || "",
            postCode: addressData?.postCode || "",
            country: addressData?.country || "",
        }
    }

    // If Incoming Data is valid copy it else initialize an empty array.
    private verifyItems(itemsData: Item[]): Item[] {
        return Array.isArray(itemsData) ? [...itemsData] : [];
    }


    // method to generate an invoice id for new invoices
    private generateInvoiceID() {
        const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const firstPart: string = letters.charAt(Math.floor(Math.random() * letters.length));
        const secondPart: string = letters.charAt(Math.floor(Math.random() * letters.length));
        const thirdPart: number = Math.floor(Math.random() * 9999) + 1000;
        return `${firstPart}${secondPart}${thirdPart}`
    }


    // Create a Valid Invoice
    public createInvoice() {
        this.invoice.createdAt = new Date().toISOString().substring(0, 10)
        this.invoice.paymentDue = new Date().toISOString().substring(0, 10);
        return this.invoice;
    }

}