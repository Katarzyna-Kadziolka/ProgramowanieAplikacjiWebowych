import { PaymentMethod } from './../../models/PaymentMethod';
import { InvoiceItem } from './../../models/InvoiceItem';
import { VateRate } from './../../models/VatRate';
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
  orderer!: FormGroup<OrdererForm>
  invoice!: FormGroup<InvoiceForm>

  constructor(private readonly fb: FormBuilder) {}

  public VateRate = VateRate;
  public PaymentMethod = PaymentMethod;

  ngOnInit(): void {
    this.invoiceIssuer = this.fb.group({
      Name: ["", [Validators.required]],
      City: ["", [Validators.required]],
      Address: ["", [Validators.required]],
      AccountNumber: [0, [Validators.required, Validators.minLength(26), Validators.maxLength(26)]],
      Nip: [0, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      PostCode: [0, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    })

    this.orderer = this.fb.group({
      Name: ["", [Validators.required]],
      City: ["", [Validators.required]],
      Address: ["", [Validators.required]],
      PostCode: [0, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      Nip: [0, [Validators.minLength(10), Validators.maxLength(10)]],
    })

    this.invoice = this.fb.group({
      InvoiceIssuer: this.invoiceIssuer,
      Orderer: this.orderer,
      InvoiceNumber: [0, [Validators.required]],
      IssueDate: [new Date(), [Validators.required]],
      SaleDate: [new Date(), [Validators.required]],
      PaymentDeadline: [new Date(), [Validators.required]],
      PaymentMethod: this.fb.nonNullable.control(PaymentMethod.Card),
      InvoiceItems: this.fb.array<FormGroup<InvoiceItemForm>>([])
    })

    this.invoiceIssuer.valueChanges.subscribe(i => console.log(i))
  }

  onAddItemClick = () => {
    const invoiceItem = this.fb.group({
      Name: ["", [Validators.required]],
      Amount: [0, [Validators.required]],
      UnitMeassure: ["", [Validators.required]],
      NetPrice: [0, [Validators.required]],
      VatRate: this.fb.nonNullable.control(VateRate.Zero),
      NetWorth: [0, [Validators.required]],
      GrossValue: [0, [Validators.required]],
    })
    this.invoice.controls.InvoiceItems.push(invoiceItem);
  }
}
