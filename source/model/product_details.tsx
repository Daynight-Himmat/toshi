export interface Root {
  success: boolean
  result: ProductResult
  message: string
}

export interface ProductResult {
  id: number
  type: string
  product_code: string
  product_name: string
  product_category: string
  unit: string
  hsn_sac: string
  tax_preference: string
  intra_state_gst_rate: string
  inter_state_gst_rate: string
  readily_available_qty: string
  product_color: string[]
  product_finish: string[]
  product_usage: string[]
  product_type: string[]
  product_by_region: string
  mixing_possibility: string
  user_id: number
  upload_img: string
  description: string
  out_of_stock: string
  deleted: string
  is_product_saved: string
  unit_code: string
}
