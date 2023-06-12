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

  static completeOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.completeOrderList+`?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static lostOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.lostOrderList+`?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static inquiryOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.inquiry+`?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static outDateOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.orderList+`?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getProductBYPrefernce = async (preference_id: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.productListing+`?user_id=${id}&preference_id=${preference_id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getProductWithUserPrefernce = async (praference?: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.getUserPreference+`?user_id=${id}&preference_id=${praference}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getProductDetails = async (productId: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.getProductDetails+`?user_id=${id}&product_id=${productId}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getFeeds = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.newsListing+ `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getSaveFeeds = async (news_feed_id: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.saveNews+ `?user_id=${id}&news_feed_id=${news_feed_id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getSaveProduct = async (product_id: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axiosInstance({
        method: 'get',
        url: BaseUrl(ApiConstants.saveProduct+ `?user_id=${id}&product_id=${product_id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Apis;
