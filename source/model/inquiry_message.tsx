export interface InquiryMessage {
    success: boolean
    result: string
    message: Message[]
  }
  
  export interface Message {
    id: number
    user_id: number
    contact_name: string
    phone: string
    email: string
    inquiry_id: number
    news_feed_id: any
    inquiry_msg: string
    inquiry_date: string
    inquiry_for: string
    inquiry_source: string
    source_type: string
    converted_to_ri: string
    created_date: string
    deleted: string
    productDetails: ProductDetails
  }
  
  export interface ProductDetails {
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
    user_id?: number
    upload_img: string
    description: string
    out_of_stock: string
    deleted: string
  }
  