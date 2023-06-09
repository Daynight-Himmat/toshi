import axios from 'axios';
import {BaseUrl, ApiConstants} from '../constants/api_constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './interceptor';

abstract class Apis {
  static logInApi = async (username: string, password: string) => {
    try {
      const response = await axios({
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

  static forgetPass = async (username?: string) => {
    try {
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.forgotPassword),
        headers: {
          Accept: 'application/json',
        },
        data: {
          email: username,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static signUp = async (
    name?: string,
    companyName?: string,
    email?: string,
    mobile?: string,
    country?: string,
    message?: string,
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.createAccount),
        headers: {
          Accept: 'application/json',
        },
        data: {
          name: name,
          message: message,
          company_name: companyName,
          email: email,
          phone_no: mobile,
          country: country,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static createPassword = async (
    password: string,
    confirm_password: string,
  ) => {
    try {
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.createPassword),
        headers: {
          Accept: 'application/json',
        },
        data: {
          user_id: 190,
          new_password: password,
          confirm_password: confirm_password,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static changePassword = async (
    password: string,
    confirm_password: string,
  ) => {
    try {
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.changePassword),
        headers: {
          Accept: 'application/json',
        },
        data: {
          // user_id: id,
          new_password: password,
          confirm_password: confirm_password,
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
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.messageList),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          token: token,
          user_id: id,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.completeOrderList + `?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.lostOrderList + `?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.inquiry + `?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.orderList + `?contact_name_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(
          ApiConstants.productListing +
            `?user_id=${id}&preference_id=${preference_id}`,
        ),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(
          ApiConstants.getUserPreference +
            `?user_id=${id}&preference_id=${praference}`,
        ),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(
          ApiConstants.getProductDetails +
            `?user_id=${id}&product_id=${productId}`,
        ),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.newsListing + `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(
          ApiConstants.saveNews + `?user_id=${id}&news_feed_id=${news_feed_id}`,
        ),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      const response = await axios({
        method: 'get',
        url: BaseUrl(
          ApiConstants.saveProduct + `?user_id=${id}&product_id=${product_id}`,
        ),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getSaveProductList = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.savedProductListing + `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getSaveFeedList = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.savedNewsListing + `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getPraferences = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.getProductPreference + `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getUserPraferences = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.getUserPreference + `?user_id=${id}`),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getSavePreference = async (
    praferenceType: string,
    preferenceIdList: any,
  ) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.saveUserPreference),
        data: {
          user_id: id,
          preference_type: praferenceType,
          preference_id: preferenceIdList,
        },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getEditProfile = async (data: any) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.editProfile),
        data: data,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getFilter = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios({
        method: 'get',
        url: BaseUrl(ApiConstants.getFilterData),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getFilterProducts = async (
    caterogy_id?: number[],
    finish_id?: number[],
    usage_id?: number[],
    type_id?: number[],
    mixing_posibility_id?: number[],
    color_id?: number[],
  ) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.filterProduct),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          user_id: id,
          caterogy_id: caterogy_id,
          finish_id: finish_id,
          usage_id: usage_id,
          type_id: type_id,
          mixing_posibility_id: mixing_posibility_id,
          color_id: color_id,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static sendInquiry = async (
    contact_name_id: any,
    company_acc_name_id: any,
    rng_inquiry_name: any,
    email: any,
    mobile_no: any,
    description: any,
    product_interested_in_id: any,
    inquiry_from: any,
    source_type: any,
  ) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.filterProduct),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          contact_name_id: contact_name_id,
          company_acc_name_id: company_acc_name_id,
          rng_inquiry_name: rng_inquiry_name,
          email: email,
          mobile_no: mobile_no,
          description: description,
          product_interested_in_id: product_interested_in_id,
          inquiry_from: inquiry_from,
          source_type: source_type,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  static getFourceToUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      const response = await axios({
        method: 'post',
        url: BaseUrl(ApiConstants.getVersionController),
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Apis;
