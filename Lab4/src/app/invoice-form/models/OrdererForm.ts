import { FormControl } from "@angular/forms";

export type OrdererForm = {
    Name: FormControl<string | null>,
    City: FormControl<string | null>,
    Address: FormControl<string | null>,
    PostCode: FormControl<number | null>,
    Nip: FormControl<number | null >,
}