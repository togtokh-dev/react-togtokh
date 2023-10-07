"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectDownloadImage = exports.selectWalk = exports.openLink = exports.closeWebView = exports.setScreenProtection = exports.setColor = exports.checkNotification = exports.selectContact = exports.buy = void 0;
const mobile_device_detect_1 = require("mobile-device-detect");
function buy(merchantId, amount, orderId, description, callback, callbackUrl) {
    if (window.JSReceiver) {
        window.JSReceiver.buyfromShoppy(merchantId, `${amount}`, orderId, description, callbackUrl);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({
            merchantId,
            amount,
            orderId,
            description,
            callbackUrl,
        });
        window.webkit.messageHandlers.buyfromShoppy.postMessage(message);
    }
    window.afterPurchase = (transactionID, orderID, status, statusCode, transRequestId) => callback(transactionID, orderID, status, statusCode, transRequestId);
}
exports.buy = buy;
function selectContact(type, callback) {
    if (window.JSReceiver) {
        window.JSReceiver.selectContact(type);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({ type });
        window.webkit.messageHandlers.selectContact.postMessage(message);
    }
    window.contactSelected = (contact) => callback(contact);
}
exports.selectContact = selectContact;
function checkNotification(callback) {
    if (window.JSReceiver) {
        window.JSReceiver.checkNotificationForOrder();
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({});
        window.webkit.messageHandlers.checkNotificationForOrder.postMessage(message);
    }
    window.isEnabledNotification = (isEnabled) => callback(isEnabled);
}
exports.checkNotification = checkNotification;
function setColor(color, isStatusDark) {
    if (window.JSReceiver) {
        window.JSReceiver.setColor(color, isStatusDark);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({ color, isStatusDark });
        window.webkit.messageHandlers.setColor.postMessage(message);
    }
}
exports.setColor = setColor;
function setScreenProtection(status) {
    if (window.JSReceiver) {
        window.JSReceiver.setScreenProtection(status);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        // const message = JSON.stringify({});
        window.webkit.messageHandlers.setScreenProtection.postMessage(status);
    }
}
exports.setScreenProtection = setScreenProtection;
function closeWebView() {
    if (window.JSReceiver)
        window.JSReceiver.closeWebView();
    if (window.webkit && window.webkit.messageHandlers)
        window.webkit.messageHandlers.closeWebView.postMessage("close");
}
exports.closeWebView = closeWebView;
function openLink(url) {
    var _a;
    console.log("opening browser with this url", url);
    if ((window === null || window === void 0 ? void 0 : window.JSReceiver) && mobile_device_detect_1.isAndroid) {
        window.JSReceiver.openLink(url);
    }
    if (((_a = window === null || window === void 0 ? void 0 : window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({ url });
        window.webkit.messageHandlers.openLink.postMessage(message);
    }
}
exports.openLink = openLink;
function selectWalk(willOpen, callback) {
    console.log("selectWalk called");
    if (window && window.JSReceiver && mobile_device_detect_1.isAndroid) {
        window.JSReceiver.onWalkCountConcentAccepted(willOpen); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if (window.webkit && window.webkit.messageHandlers && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({ willOpen });
        window.webkit.messageHandlers.onWalkCountConcentAccepted.postMessage(message); //Toki app will inject by this function in iOS
    }
    window.refreshWalkCountUi = () => callback();
}
exports.selectWalk = selectWalk;
function selectDownloadImage(type, callback) {
    console.log("selectDownloadImage called", type);
    if (window && window.JSReceiver && mobile_device_detect_1.isAndroid) {
        window.JSReceiver.selectDownloadImage(type); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if (window.webkit && window.webkit.messageHandlers && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({
            url: type,
        });
        window.webkit.messageHandlers.selectDownloadImage.postMessage(message); //Toki app will inject by this function in iOS
    }
    callback();
    // window.downloadImageSelected = (data) => callback(data)
}
exports.selectDownloadImage = selectDownloadImage;
exports.default = {
    buy,
    selectContact,
    checkNotification,
    setColor,
    setScreenProtection,
    closeWebView,
    selectWalk,
    selectDownloadImage,
};
//# sourceMappingURL=toki.js.map