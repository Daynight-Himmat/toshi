export interface userLogIn {
    success: boolean
    result: UserLogInResult
    message: string
  }
  
  export interface UserLogInResult {
    token: string
    name: Name
    new_number: string
    business_card_path: string
    user_img_path: string
  }
  
  export interface Name {
    id: number
    company_id: string
    name_prefixes: string
    first_name: string
    last_name: string
    email: string
    secondary_email: string
    mobile_no: string
    secondary_mobile_no: string
    whatsapp_no: string
    designation: string
    department: string
    block: string
    profile_photo: string
    text: string
    business_card: string
    back_business_card: string
    deleted: string
    login_first_attempt: string
    login_step: string
    device_token: string
    profile_photo_url: string
  }
  