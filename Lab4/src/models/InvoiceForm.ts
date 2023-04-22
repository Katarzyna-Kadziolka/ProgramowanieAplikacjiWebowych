import { InvoiceIssuerForm } from "./InvoiceIssuerForm"
import { InvoiceItemForm } from "./InvoiceItemForm"
import { OrdererForm } from "./OrdererForm"
import { PaymentMethod } from "./PaymentMethod"

export type InvoiceForm = {
    InvoiceIssuer: InvoiceIssuerForm,
    Orderer: OrdererForm,
    InvoiceNumber: number,
    IssueDate: Date,
    SaleDate: Date,
    PeymentDeadline: Date,
    PaymentMethod: PaymentMethod,
    InvoiceItems: InvoiceItemForm[]
}