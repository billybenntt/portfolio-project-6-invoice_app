import {Item, Invoice, Address} from "../types/global";


export class InvoiceCreator {
    private invoice: Invoice;

    // Get Data from Outside
    constructor(invoiceData: any) {
        this.invoice = {
            id: invoiceData.id || "",
            createdAt: invoiceData.createdAt || "",
            paymentDue: invoiceData.paymentDue || "",
            description: invoiceData.description || "",
            paymentTerms: invoiceData.paymentTerms || 0,
            clientName: invoiceData.clientName || "",
            clientEmail: invoiceData.clientEmail || "",
            status: invoiceData.status || "",
            senderAddress: this.verifyAddress(invoiceData.senderAddress),
            clientAddress: this.verifyAddress(invoiceData.clientAddress),
            items: this.verifyItems(invoiceData.items),
            total: invoiceData.total || 0,
        };
    }

    // Method to add an item to the items array
    public addInvoiceItem(item: Item): void {
        this.invoice.items.push(item);
    }

    // Method to get the current items array
    public getAllItems(): Item[] {
        return this.invoice.items;
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


}
