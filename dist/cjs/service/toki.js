"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQrScan = exports.selectDownloadImage = exports.selectWalk = exports.openLink = exports.closeWebView = exports.setScreenProtection = exports.setColor = exports.checkNotification = exports.selectContact = exports.buy = void 0;
const mobile_device_detect_1 = require("mobile-device-detect");
const react_1 = require("react");
function buy(merchantId, amount, orderId, description, callback, callbackUrl) {
    var _a, _b, _c, _d, _e;
    if (window.JSReceiver) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.buyfromShoppy(merchantId, `${amount}`, orderId, description, callbackUrl);
    }
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers)) {
        const message = JSON.stringify({
            merchantId,
            amount,
            orderId,
            description,
            callbackUrl,
        });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.buyfromShoppy) === null || _e === void 0 ? void 0 : _e.postMessage(message);
    }
    window.afterPurchase = (transactionID, orderID, status, statusCode, transRequestId) => callback(transactionID, orderID, status, statusCode, transRequestId);
}
exports.buy = buy;
function selectContact(type, callback) {
    var _a, _b, _c, _d, _e;
    if (window === null || window === void 0 ? void 0 : window.JSReceiver) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.selectContact(type);
    }
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers)) {
        const message = JSON.stringify({ type });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.selectContact) === null || _e === void 0 ? void 0 : _e.postMessage(message);
    }
    window.contactSelected = (contact) => callback(contact);
}
exports.selectContact = selectContact;
function checkNotification(callback) {
    var _a, _b, _c;
    if (window === null || window === void 0 ? void 0 : window.JSReceiver) {
        window === null || window === void 0 ? void 0 : window.JSReceiver.checkNotificationForOrder();
    }
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_a = window === null || window === void 0 ? void 0 : window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers)) {
        const message = JSON.stringify({});
        (_c = (_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) === null || _c === void 0 ? void 0 : _c.checkNotificationForOrder.postMessage(message);
    }
    window.isEnabledNotification = (isEnabled) => callback(isEnabled);
}
exports.checkNotification = checkNotification;
function setColor(color, isStatusDark) {
    var _a, _b, _c, _d, _e;
    if (window === null || window === void 0 ? void 0 : window.JSReceiver) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.setColor(color, isStatusDark);
    }
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers)) {
        const message = JSON.stringify({ color, isStatusDark });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.setColor) === null || _e === void 0 ? void 0 : _e.postMessage(message);
    }
}
exports.setColor = setColor;
function setScreenProtection(status) {
    var _a, _b, _c, _d;
    if (window === null || window === void 0 ? void 0 : window.JSReceiver) {
        window === null || window === void 0 ? void 0 : window.JSReceiver.setScreenProtection(status);
    }
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_a = window === null || window === void 0 ? void 0 : window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers)) {
        // const message = JSON.stringify({});
        (_d = (_c = (_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) === null || _c === void 0 ? void 0 : _c.setScreenProtection) === null || _d === void 0 ? void 0 : _d.postMessage(status);
    }
}
exports.setScreenProtection = setScreenProtection;
function closeWebView() {
    var _a, _b, _c, _d;
    if (window === null || window === void 0 ? void 0 : window.JSReceiver)
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.closeWebView();
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers))
        (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.closeWebView.postMessage("close");
}
exports.closeWebView = closeWebView;
function openLink(url) {
    var _a, _b, _c, _d, _e;
    console.log("opening browser with this url", url);
    if ((window === null || window === void 0 ? void 0 : window.JSReceiver) && mobile_device_detect_1.isAndroid) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.openLink(url);
    }
    if (((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({ url });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.openLink) === null || _e === void 0 ? void 0 : _e.postMessage(message);
    }
}
exports.openLink = openLink;
function selectWalk(willOpen, callback) {
    var _a, _b, _c, _d, _e;
    console.log("selectWalk called");
    if (window && (window === null || window === void 0 ? void 0 : window.JSReceiver) && mobile_device_detect_1.isAndroid) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.onWalkCountConcentAccepted(willOpen); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({ willOpen });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.onWalkCountConcentAccepted) === null || _e === void 0 ? void 0 : _e.postMessage(message); //Toki app will inject by this function in iOS
    }
    window.refreshWalkCountUi = () => callback();
}
exports.selectWalk = selectWalk;
function selectDownloadImage(type, callback) {
    var _a, _b, _c, _d, _e;
    console.log("selectDownloadImage called", type);
    if (window && (window === null || window === void 0 ? void 0 : window.JSReceiver) && mobile_device_detect_1.isAndroid) {
        (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.selectDownloadImage(type); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if (window.webkit && ((_b = window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers) && mobile_device_detect_1.isIOS) {
        const message = JSON.stringify({
            url: type,
        });
        (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.selectDownloadImage) === null || _e === void 0 ? void 0 : _e.postMessage(message); //Toki app will inject by this function in iOS
    }
    callback();
    // window.downloadImageSelected = (data) => callback(data)
}
exports.selectDownloadImage = selectDownloadImage;
function useQrScan({ value, setValue, Scan, }) {
    const [URL, setURL] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        if (URL) {
            setValue(URL);
        }
    }, [URL]);
    (0, react_1.useEffect)(() => {
        if (Scan > 0) {
            run();
        }
    }, [Scan]);
    const run = () => {
        var _a, _b, _c, _d, _e;
        if (window === null || window === void 0 ? void 0 : window.JSReceiver) {
            (_a = window === null || window === void 0 ? void 0 : window.JSReceiver) === null || _a === void 0 ? void 0 : _a.openNativeScanner(); //Toki app will inject by this function in Android;
        }
        // in case of iOS webkit
        if ((window === null || window === void 0 ? void 0 : window.webkit) && ((_b = window === null || window === void 0 ? void 0 : window.webkit) === null || _b === void 0 ? void 0 : _b.messageHandlers)) {
            const message = JSON.stringify({
                message: "Opening native scanner",
            });
            (_e = (_d = (_c = window === null || window === void 0 ? void 0 : window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d.openNativeScanner) === null || _e === void 0 ? void 0 : _e.postMessage(message); //Toki app will inject by this function in iOS
        }
        return (window.afterScan = (url) => setURL(url));
    };
}
exports.useQrScan = useQrScan;
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