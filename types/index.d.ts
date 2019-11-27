// Type definitions for cordova-plugin-google-pau
// Project: https://github.com/Goliath86/cordova-plugin-google-pay
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
//                 Tim Brust <https://github.com/timbru31>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This plugin defines methods to interact with the Android native Google Pay API
 */
interface GooglePay {
    getTest(successCallback: Function, errorCallback: Function): void
}

declare var googlePay: GooglePay;
