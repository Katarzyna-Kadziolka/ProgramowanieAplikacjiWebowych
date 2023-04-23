import { FormControl } from "@angular/forms"

export type InvoiceIssuerForm = {
    Name: FormControl<string | null>,
    City: FormControl<string | null>,
    Address: FormControl<string | null>,
    PostCode: FormControl<number | null>,
    Nip: FormControl<number | null>,
    AccountNumber: FormControl<number | null>
}