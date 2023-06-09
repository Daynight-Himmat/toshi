import ResetPass from '../screens/auth/create_pass';
import ForgetPass from '../screens/auth/forget_pass';
import SignIn from '../screens/auth/sign_in';
import SignUp from '../screens/auth/sign_up';
import AboutUs from '../screens/home/menu/about';
import DashBoard from '../screens/home/dashboard';
import Feeds from '../screens/home/feed/feeds';
import InquiryMessage from '../screens/home/message/inquiry_message';
import ProductPreference from '../screens/home/menu/product_preference';
import UsagePreference from '../screens/home/menu/usage_preference';
import MyProfile from '../screens/home/my_profile';
import InquiryOrder from '../screens/home/order/inquiry';
import OutDateOrder from '../screens/home/order/outdate';
import CompleteOrder from '../screens/home/order/complete';
import LostOrder from '../screens/home/order/lost';
import InquiryOrderStatus from '../screens/home/order/order';
import ListOfProduct from '../screens/home/product/product_list';
import SaveNewsFeeds from '../screens/home/menu/save_news_feeds';
import SaveProduct from '../screens/home/menu/save_product';
import SplashSreen from '../screens/onboarding/splash';
import WelCome from '../screens/onboarding/welcome';
import ProductPage from '../screens/home/product/product_page';
import ProductDetails from '../screens/home/product/product_details';
import OrderStatusDetails from '../screens/home/order/order_status_details';
import InquiryPreView from '../screens/home/message/inquiry_preview';
import FeedsPreview from '../screens/home/feed/feeds_preview';
import EditProfile from '../screens/home/edit_profile';
import FilterPage from '../screens/home/filter/filter';
import FilterProductPage from '../screens/home/filter/filter_product';
import SendInquiry from '../screens/home/product/send_inquirey_page';
import SendInquiryPreview from '../screens/home/product/send_inquiry_show';

const screens = [
  {
    name: 'WelCome',
    component: WelCome,
    headerShown: false,
  },
  {
    name: 'Splash',
    component: SplashSreen,
    headerShown: false,
  },
  {
    name: 'SignIn',
    component: SignIn,
    headerShown: false,
  },
  {
    name: 'SignUp',
    component: SignUp,
    title: "Create An Account"
    
  },
  {
    name: 'Forget-Pass',
    component: ForgetPass,
    headerShown: false,
  },
  {
    name: 'Create-Pass',
    component: ResetPass,
    headerShown: false,
  },
  {
    name: 'DashBoard',
    component: DashBoard,
    headerShown: false,
  },
  {
    name: 'MyProfile',
    component: MyProfile,
    headerShown: false,
  },
  {
    name: 'InquiryMessage',
    component: InquiryMessage,
    title: "Inquiry Message"
  },
  {
    name: 'Product Preference',
    component: ProductPreference,
    headerShown: false,
  },
  {
    name: 'Usage Preference',
    component: UsagePreference,
    headerShown: false,
  },
  {
    name: 'About Us',
    component: AboutUs,

  },
  {
    name: 'Save Product',
    component: SaveProduct,
    
  },
  {
    name: 'Save News Feeds',
    component: SaveNewsFeeds,
    
  },
  {
    name: 'List Of Product',
    component: ListOfProduct,
    headerShown: false,
  },
  {
    name: 'Inquiry & Order Status',
    component: InquiryOrderStatus
  },
  {
    name: 'Feeds',
    component: Feeds
  },
  {
    name: 'Inquiry Order',
    component: InquiryOrder

  },
  {
    name: 'OutDate Order',
    component: OutDateOrder,
    
  },
  {
    name: 'Complete Order',
    component: CompleteOrder
    
  },
  {
    name: 'Lost Order',
    component: LostOrder,
    
  }, 
  {
    name: 'Product Details',
    component: ProductDetails,
  },
  {
    name: 'Order Status Details',
    component: OrderStatusDetails,
    headerShown: false,
  },
  {
    name: 'Inquiry Preview',
    component: InquiryPreView,
    headerShown: true,
  },
  {
    name: 'Feed Preview',
    component: FeedsPreview,
    headerShown: true,
  },
  {
    name: 'Edit Profile',
    component: EditProfile,
    headerShown: false,
  },
  {
    name: 'Filter Page',
    component: FilterPage,
    headerShown: false,
  },
  {
    name: 'Filter Product Page',
    component: FilterProductPage,
  },
  {
    name: 'Send Inquiry Page',
    component: SendInquiry
  },
  {
    name: 'Send Inquiry Preview',
    component: SendInquiryPreview
  }
  
];

export default screens;
