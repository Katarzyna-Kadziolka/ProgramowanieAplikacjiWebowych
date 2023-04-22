import { FormControl } from "@angular/forms";

export type OrdererForm = {
    Name: FormControl<string>,
    City: FormControl<string>,
    Address: FormControl<string>,
    PostCode: FormControl<number>,
    Nip?: FormControl<number>,
}