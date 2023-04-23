import { FormControl } from "@angular/forms"
import { VateRate } from "../../../models/VatRate"

export type InvoiceItemForm = {
    Name: FormControl<string>,
    Amount: FormControl<number>,
    UnitMeassure: FormControl<string>,
    NetPrice: FormControl<number>,
    VatRate: FormControl<VateRate>,
    NetWorth: FormControl<number>,
    GrossValue: FormControl<number>
}

// paymentMethod = Payment (przypisuję enumerator)
// iteruję po keyValue