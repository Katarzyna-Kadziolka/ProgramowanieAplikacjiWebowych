import { InvoiceItemForm } from './models/InvoiceItemForm';
import { InvoiceIssuerForm } from './models/InvoiceIssuerForm';
import { InvoiceForm } from './models/InvoiceForm';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      Name: this.fb.nonNullable.control
    })
  }
}
