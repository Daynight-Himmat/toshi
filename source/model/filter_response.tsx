export interface Filter {
    success: boolean
    result: FilterResult
    message: string
  }
  
  export interface FilterResult {
    product_categories: ProductCategory[]
    product_color: ProductColor[]
    product_finish: ProductFinish[]
    product_usages: ProductUsage[]
    product_types: ProductType[]
    product_regions: ProductRegion[]
    mixing_posibilities: MixingPosibility[]
  }
  
  export interface ProductCategory {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface ProductColor {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface ProductFinish {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface ProductUsage {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface ProductType {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface ProductRegion {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  
  export interface MixingPosibility {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
  }
  