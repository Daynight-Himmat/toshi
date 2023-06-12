export interface OrderStatus {
  success: boolean
  result: orderResult[]
  message: string
}

export interface orderResult {
  id: number
  financial_year_id: number
  inquiry_no: string
  inquiry_owner_id: string
  message_id: any
  inquiry_date: string
  rng_inquiry_name: string
  amount: string
  currency_id: string
  exchange_rate: string
  inquiry_stage_id: string
  probability: string
  closing_date: string
  company_acc_name_id: string
  contact_name_id: string
  email: string
  mobile_no: string
  whatsapp_no: string
  product_interested_in_id: string
  description: string
  inquiry_from: string
  eta_date: string
  etd_date: string
  bl_date: string
  lead_ref_no: string
  autocode: string
  fin_year: string
  created_time: string
  voids: string
  deleted: string
  documents: any
  document_remarks: any
  order_lost_remark: any
  SalesInvoices: any
  product_code: string[]
  product_description: string[]
  product_img: string
  product_name: string
  productID: number[]
  currency: string
  inquiry_stage: string
}
