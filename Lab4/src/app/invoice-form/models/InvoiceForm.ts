import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { InvoiceIssuerForm } from "./InvoiceIssuerForm"
import { InvoiceItemForm } from "./InvoiceItemForm"
import { OrdererForm } from "./OrdererForm"
import { PaymentMethod } from "../../../models/PaymentMethod"

export type InvoiceForm = {
    InvoiceIssuer: FormGroup<InvoiceIssuerForm>,
    Orderer: FormGroup<OrdererForm>,
    InvoiceNumber: FormControl<number | null>,
    IssueDate: FormControl<Date | null>,
    SaleDate: FormControl<Date | null>,
    PaymentDeadline: FormControl<Date | null>,
    PaymentMethod: FormControl<PaymentMethod>,
    InvoiceItems: FormArray<FormGroup<InvoiceItemForm>>
}