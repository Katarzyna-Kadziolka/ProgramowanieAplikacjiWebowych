import { VateRate } from "./VatRate"

export type InvoiceItem = {
    Name: string,
    Amount: number,
    UnitMeassure: string,
    NetPrice: number,
    VatRate: VateRate,
    NetWorth: number,
    GrossValue: number
}
