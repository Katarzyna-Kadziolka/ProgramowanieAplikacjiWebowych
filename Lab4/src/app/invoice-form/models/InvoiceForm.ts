import { FormControl } from "@angular/forms"
import { InvoiceIssuerForm } from "./InvoiceIssuerForm"
import { InvoiceItemForm } from "./InvoiceItemForm"
import { OrdererForm } from "./OrdererForm"
import { PaymentMethod } from "../../../models/PaymentMethod"

export type InvoiceForm = {
    InvoiceIssuer: FormControl<InvoiceIssuerForm>,
    Orderer: FormControl<OrdererForm>,
    InvoiceNumber: FormControl<number>,
    IssueDate: FormControl<Date>,
    SaleDate: FormControl<Date>,
    PeymentDeadline: FormControl<Date>,
    PaymentMethod: FormControl<PaymentMethod>,
    InvoiceItems: FormControl<InvoiceItemForm[]>
}