var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');
var cordova = require('cordova');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function GooglePay () {
    var me = this;
}

GooglePay.prototype.getTest = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'GooglePay.getTest', arguments);
    exec(successCallback, errorCallback, 'GooglePay', 'getTest', []);
};

module.exports = new GooglePay();
