import React from "react";


//  BASE TYPES
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


// EVENT LISTENERS
export type UpdateFormEvent = React.ChangeEvent<HTMLInputElement>
export type SubmitFormEvent = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>;


// COMPONENT PROPS
export interface ButtonProps {
    text: string
    style: "accent" | "primary"
    type: "1" | "2" | "3"
    show?: "mobile" | "desktop"
}

export interface FormRowProps {
    label: string
    inputType: string
    onChange: Function
    addressType?: "client" | "sender"
    name: string,
    value: string | number
}

export interface StatusTagProps {
    invoiceStatus: InvoiceStatus
}


// STORE
export interface InvoiceState {
    allInvoices: Array<Invoice>
    singleInvoice: Invoice
    showForm: boolean,
    showModal: boolean,
    isLoading: boolean,
    isEditing: boolean
}

export type AddressChangePayload = {
    inputName: string;  // Assuming inputName is an array of strings
    inputValue: string;
    addressType: string// Change 'any' to the appropriate type if possible
};
