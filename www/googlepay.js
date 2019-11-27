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

GooglePay.prototype.getTest = function () {
    //argscheck.checkArgs('fF', 'GooglePay.getTest', arguments);
    exec(function(obj) { return obj.test; }, function(err) { console.error(err); }, 'GooglePay', 'getTest', []);
};

module.exports = new GooglePay();
