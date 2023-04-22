import { FormControl } from "@angular/forms"

export type InvoiceIssuerForm = {
    Name: FormControl<string>,
    City: FormControl<string>,
    Address: FormControl<string>,
    PostCode: FormControl<number>,
    Nip: FormControl<number>,
    AccountNumber: FormControl<number>
}