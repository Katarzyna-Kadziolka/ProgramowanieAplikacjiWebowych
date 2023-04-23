import { InvoiceIssuer } from "./InvoiceIssuer"
import { InvoiceItem } from "./InvoiceItem"
import { Orderer } from "./Orderer"
import { PaymentMethod } from "./PaymentMethod"

export type Invoice = {
    InvoiceIssuer: InvoiceIssuer,
    Orderer: Orderer,
    InvoiceNumber: number,
    IssueDate: Date,
    SaleDate: Date,
    PeymentDeadline: Date,
    PaymentMethod: PaymentMethod,
    InvoiceItems: InvoiceItem[]
}