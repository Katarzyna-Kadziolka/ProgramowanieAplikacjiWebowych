import { InvoiceIssuer } from './../../models/InvoiceIssuer';
import { InvoiceItemForm } from './models/InvoiceItemForm';
import { InvoiceIssuerForm } from './models/InvoiceIssuerForm';
import { InvoiceForm } from './models/InvoiceForm';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdererForm } from './models/OrdererForm';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoiceIssuer!: FormGroup<InvoiceIssuerForm>
  invoiceItem!: FormGroup<InvoiceItemForm>
  orderer!: FormGroup<OrdererForm>
  invoice!: FormGroup<InvoiceForm>

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.invoiceIssuer = this.fb.group({
      Name: ["", [Validators.required]],
      City: ["", [Validators.required]],
      Address: ["", [Validators.required]],
      AccountNumber: [0, [Validators.required, Validators.minLength(26), Validators.maxLength(26)]],
      Nip: [0, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      PostCode: [0, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    })

    this.invoiceIssuer.valueChanges.subscribe(i => console.log(i))
  }

}
