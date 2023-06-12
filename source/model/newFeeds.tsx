export interface NewFeeds {
    success: boolean
    result: FeedsResult[]
    message: string
  }
  
  export interface FeedsResult {
    id: number
    title: string
    descroption: string
    main_image: string
    bottom_img: string
    created_date: string
    deleted: string
    is_news_feed_saved: string
    whtsapp_no: string
  }
  