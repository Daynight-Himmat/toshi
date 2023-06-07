abstract class ApiConstants {
  static live = 'http://app.toshibbaimpex.com/toshiba-api/';
  static urlTest1 = 'http://app.toshibbaimpex.com/toshiba-api-test';
  static urlTest2 = 'http://35.154.180.193/';

  // static const baseUrl = "http://app.toshibbaimpex.com/toshiba-api/api/" ;
  // //static const baseAuthUrl = "http://3.15.216.243/api";
  // static const baseProductImageUrl = "http://app.toshibbaimpex.com/uploads/PRO_Upload/";
  // static const baseNewsMainImageUrl = "http://app.toshibbaimpex.com/uploads/News_Feeds_Main/";
  // static const baseNewsBottomImageUrl = "http://app.toshibbaimpex.com/uploads/News_Feeds_Bottom/";
  // static const baseProfileImageUrl = "http://app.toshibbaimpex.com/toshiba-api/public/UserImage/";
  // static const baseBusinessImageUrl = "http://app.toshibbaimpex.com/toshiba-api/public/UserBusinessCards/";
  // static const baseDocumentUrl = "http://app.toshibbaimpex.com/demo/uploads/leads/";

  // static const baseUrl = "http://app.toshibbaimpex.com/toshiba-api-test/api/" ;
  // //static const baseAuthUrl = "http://3.15.216.243/api";
  // // static const baseProductImageUrl = "http://app.toshibbaimpex.com/toshiba-api-test/uploads/PRO_Upload/";
  // // static const baseNewsMainImageUrl = "http://app.toshibbaimpex.com/toshiba-api-test/uploads/News_Feeds_Main/";
  // static const baseProductImageUrl = "http://app.toshibbaimpex.com/demo/uploads/PRO_Upload/";
  // static const baseNewsMainImageUrl = "http://app.toshibbaimpex.com/demo/uploads/News_Feeds_Main/";
  // static const baseNewsBottomImageUrl = "http://app.toshibbaimpex.com/demo/uploads/News_Feeds_Bottom/";
  // static const baseProfileImageUrl = "http://app.toshibbaimpex.com/demo/public/UserImage/";
  // static const baseBusinessImageUrl = "http://app.toshibbaimpex.com/demo/public/UserBusinessCards/";
  // static const baseDocumentUrl = "http://app.toshibbaimpex.com/demo/uploads/leads/";

  static baseUrl = `${this.urlTest2}toshiba-api/api/`;
  static baseAuthUrl = 'http://3.15.216.243/api';
  static baseProductImageUrl = `${this.urlTest2}uploads/PRO_Upload/`;
  static baseNewsMainImageUrl = `${this.urlTest2}uploads/News_Feeds_Main/`;
  static baseNewsBottomImageUrl = `${this.urlTest2}uploads/News_Feeds_Bottom/`;
  static baseProfileImageUrl = `${this.urlTest2}toshiba-api/public/UserImage/`;
  static baseBusinessImageUrl = `${this.urlTest2}toshiba-api/public/UserBusinessCards/`;
  static baseDocumentUrl = `${this.urlTest2}demo/uploads/leads/`;

  // User
  static login = '/login';
  static home = '/home';
  static register = '/register';
  static createAccount = '/create-account';
  static forgotPassword = '/forgot-password';
  static changePassword = '/change-password';
  static productListing = '/get-products-by-preference';
  // static const productListing = "get-prodcut-by-prefId";
  static newsListing = '/get-all-news-feed';
  static savedProductListing = '/get-user-products';
  static savedNewsListing = '/get-user-news-feeds';
  static saveProduct = '/save-user-product';
  static saveNews = '/save-user-news-feed';
  static productPreference = '/get-product-preference';
  static submitInquiry = '/save-user-inquiry';
  static inquiry = '/get-ri-running-secition';
  // "/get-pi-inquiry";
  static orderList = '/get-ri-ongoing-section';
  // "/get-inquiry";
  static completeOrderList = '/get-ri-completed-section';
  // "/get-completed-inquiry";
  static lostOrderList = '/get-ri-lost-section';
  // "/get-lost-inquiry";
  static getRiRunningSection = '/get-ri-running-secition';
  static getRiOngoingSection = '/get-ri-ongoing-section';
  static getRiCompletedSection = '/get-ri-completed-section';
  static getRiLostSection = '/get-ri-lost-section';
  static getFilterData = '/get-filter-data';
  static filterProduct = '/product-filter';
  static editProfile = '/edit-profile';
  static getProductPreference = '/get-preference';
  static getUserPreference = '/get-user-preference';
  static saveUserPreference = '/save-user-preference';
  static createPassword = '/create-password';
  static searchSuggestion = '/search-product';
  static getNotification = '/get-user-notification';
  static sendMessage = '/send-message';
  static messageList = '/get-message-details';
  static pageLimit = 10;
  static getProductDetails = '/get-product-detail';
  static getNewUser = '/get-user-check';
  static getVersionController = '/get-version-check';
  static sendEmailRe = '/send-email-ri';
}

export default ApiConstants;
