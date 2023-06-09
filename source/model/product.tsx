export interface Root {
    success: boolean
    result: Result
    message: string
  }
  
  export interface Result {
    product: Product[]
    usage: Usage[]
  }
  
  export interface Product {
    id: number
    user_id: number
    preference_id: number
    preferences_type: string
    code: string
  }
  
  export interface Usage {
    id: number
    user_id: number
    preference_id: number
    preferences_type: string
    code: string
  }
  