var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');

/**
 * Class to invoke Google Pay methods on Android devices
 * @constructor
 */
function GooglePay () {
    var me = this;
}

/**
 * Retrieve a test string from the device
 * @param successCallback Function to invoke on successfully returning from the device method invoke
 * @param errorCallback Function to invoke on error
 */
GooglePay.prototype.getTest = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'GooglePay.getTest', arguments);
    exec(successCallback, errorCallback, 'GooglePay', 'getTest', []);
};

module.exports = new GooglePay();
