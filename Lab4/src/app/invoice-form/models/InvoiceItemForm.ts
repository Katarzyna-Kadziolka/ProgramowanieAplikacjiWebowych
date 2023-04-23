import { FormControl } from "@angular/forms"
import { VateRate } from "../../../models/VatRate"

export type InvoiceItemForm = {
    Name: FormControl<string | null>,
    Amount: FormControl<number | null>,
    UnitMeassure: FormControl<string | null>,
    NetPrice: FormControl<number | null>,
    VatRate: FormControl<VateRate>,
    NetWorth: FormControl<number | null>,
    GrossValue: FormControl<number | null>
}