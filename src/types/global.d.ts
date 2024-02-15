export interface Invoice {
    invoice_id: string
    createdAt: string
    paymentDue: string
    description: string
    paymentTerms: number
    clientName: string
    clientEmail: string
    status: InvoiceStatus
    senderAddress: Address
    clientAddress: Address
    items: Array<Item>
    total: number
}

export interface Address {
    street: string
    city: string
    postCode: string
    country: string
}

export interface Item {
    name: string
    quantity: number
    price: number
    total: number
}

type InvoiceStatus = "pending" | "paid" | "draft"


// REDUX
export interface InvoiceState {
    allInvoices: Array<Invoice>
    singleInvoice: Invoice
    showForm: boolean,
    showModal: boolean,
    isLoading: boolean,
    isEditing: boolean
}

