import {CommonActions} from '@react-navigation/native';

class CommanFunctions {
  static routing = (
    navigation: {dispatch: (arg0: CommonActions.Action) => any},
    route: string,
  ) =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: route}],
      }),
    );

  static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  static validateEmail = (validEmail: string) =>
    this.emailRegex.test(validEmail);
}

export default CommanFunctions;
