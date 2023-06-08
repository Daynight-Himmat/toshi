import axios from 'axios';
import {BaseUrl, ApiConstants} from '../constants/api_constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './interceptor';

abstract class Apis {
  static logInApi = async (username: string, password: string) => {
    try {
      console.log(username, password);

      const response = await axiosInstance({
        method: 'post',
        url: BaseUrl(ApiConstants.login),
        headers: {
          Accept: 'application/json',
        },
        data: {
          email: username,
          password: password,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getInquiryMessage = async () => {
    try {
      const id = await AsyncStorage.getItem('id'); 
      const token = await AsyncStorage.getItem('token'); 
      const response = await axiosInstance({
        method: 'post',
        url: BaseUrl(ApiConstants.messageList),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: {
            token: token,
            user_id: id
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static inquiryMessage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        BaseUrl(ApiConstants.messageList),
        {
          token: token,
          userId: 2,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export default Apis;
