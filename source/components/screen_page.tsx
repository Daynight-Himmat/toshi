import ResetPass from '../screens/auth/create_pass';
import ForgetPass from '../screens/auth/forget_pass';
import SignIn from '../screens/auth/sign_in';
import SignUp from '../screens/auth/sign_up';
import AboutUs from '../screens/home/about';
import DashBoard from '../screens/home/dashboard';
import Feeds from '../screens/home/feeds';
import InquiryMessage from '../screens/home/inquiry_message';
import ProductPreference from '../screens/home/menu/product_preference';
import UsagePreference from '../screens/home/menu/usage_preference';
import MyProfile from '../screens/home/my_profile';
import InquiryOrder from '../screens/home/order/inquiry';
import OutDateOrder from '../screens/home/order/outdate';
import CompleteOrder from '../screens/home/order/complete';
import LostOrder from '../screens/home/order/lost';
import InquiryOrderStatus from '../screens/home/order/order';
import ListOfProduct from '../screens/home/product/product_list';
import SaveNewsFeeds from '../screens/home/save_news_feeds';
import SaveProduct from '../screens/home/save_product';
import SplashSreen from '../screens/onboarding/splash';
import WelCome from '../screens/onboarding/welcome';
import ProductPage from '../screens/home/product/product_page';
import ProductDetails from '../screens/home/product/product_details';

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
    name: 'ProductPreference',
    component: ProductPreference,
  },
  {
    name: 'UsagePreference',
    component: UsagePreference,
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
  
];

export default screens;
