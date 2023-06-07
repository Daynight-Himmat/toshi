import ResetPass from '../screens/auth/create_pass';
import ForgetPass from '../screens/auth/forget_pass';
import SignIn from '../screens/auth/sign_in';
import SignUp from '../screens/auth/sign_up';
import DashBoard from '../screens/home/dashboard';
import InquiryMessage from '../screens/home/inquiry_message';
import ProductPreference from '../screens/home/menu/product_preference';
import UsagePreference from '../screens/home/menu/usage_preference';
import MyProfile from '../screens/home/my_profile';
import SplashSreen from '../screens/onboarding/splash';
import WelCome from '../screens/onboarding/welcome';

const screens = [
  {
    name: 'WelCome',
    component: WelCome,
  },
  {
    name: 'Splash',
    component: SplashSreen
  },
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'Forget-Pass',
    component: ForgetPass,
  },
  {
    name: 'Create-Pass',
    component: ResetPass,
  },
  {
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    name: 'MyProfile',
    component: MyProfile,
  },
  {
    name: 'InquiryMessage',
    component: InquiryMessage,
  },
  {
    name: 'ProductPreference',
    component: ProductPreference,
  },
  {
    name: 'UsagePreference',
    component: UsagePreference,
  },
];

export default screens;
