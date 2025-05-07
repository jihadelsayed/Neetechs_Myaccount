// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  // SERVER_URL: "http://127.0.0.1:8000/",
  // FrontEnd_URL: "http://localhost:4200/",
  // CHAT_URL: "ws://localhost:8000/ws/chat/",
  // SERVER_URL_WITH_OUT_SLASH: "http://127.0.0.1:8000",
  STRIPE_PUBLIC_KEY: "pk_test_51IwTvvIR19rXEZpRWoj9M4BGNy5nJ1GQOsXUZXHRD0PS3QGexQQSVNQR0vMB8jMoONQtO4RNQ30pC3N5BdgiGstB00shA8ejRI",
  //SERVER_URL: "http://server.neetechs.com/",
  SERVER_URL: '',
  
  JSON_URL: 'https://raw.githubusercontent.com/jihadelsayed/neetechs/main/json/islam/',
  CHAT_URL: "wss://server.neetechs.com/ws/chat/",
  SERVER_URL_WITH_OUT_SLASH: "",
  FrontEnd_URL: "https://neetechs.com",
  //LoginURL: "http://localhost:22958/",
  LoginURL: '',
  //LoginURL: "https://accounts.neetechs.com/",
  
  MY_ACCOUNT_URL: "https://myaccount.neetechs.com/",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
