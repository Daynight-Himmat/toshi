export interface Root {
    success: boolean
    result: Result
    message: string
  }
  
  export interface Result {
    usages_preference: UsagesPreferenceList[]
    product_preference: ProductPreferenceList[]
  }
  
  export interface UsagesPreferenceList {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
    is_preference_saved: string
  }
  
  export interface ProductPreferenceList {
    id: number
    types_id: number
    code: string
    description: string
    probability: string
    conv_fect: string
    show_on_app: string
    deleted: string
    is_preference_saved: string
  }
  