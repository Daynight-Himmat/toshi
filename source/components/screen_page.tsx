import ResetPass from '../screens/auth/create_pass';
import ForgetPass from '../screens/auth/forget_pass';
import SignIn from '../screens/auth/sign_in';
import SignUp from '../screens/auth/sign_up';
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
];

export default screens;
