import { isAndroid, isIOS } from "mobile-device-detect";
import { useState, useEffect } from "react";
export function buy(merchantId, amount, orderId, description, callback, callbackUrl) {
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
export function selectContact(type, callback) {
    if (window.JSReceiver) {
        window.JSReceiver.selectContact(type);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({ type });
        window.webkit.messageHandlers.selectContact.postMessage(message);
    }
    window.contactSelected = (contact) => callback(contact);
}
export function checkNotification(callback) {
    if (window.JSReceiver) {
        window.JSReceiver.checkNotificationForOrder();
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({});
        window.webkit.messageHandlers.checkNotificationForOrder.postMessage(message);
    }
    window.isEnabledNotification = (isEnabled) => callback(isEnabled);
}
export function setColor(color, isStatusDark) {
    if (window.JSReceiver) {
        window.JSReceiver.setColor(color, isStatusDark);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        const message = JSON.stringify({ color, isStatusDark });
        window.webkit.messageHandlers.setColor.postMessage(message);
    }
}
export function setScreenProtection(status) {
    if (window.JSReceiver) {
        window.JSReceiver.setScreenProtection(status);
    }
    if (window.webkit && window.webkit.messageHandlers) {
        // const message = JSON.stringify({});
        window.webkit.messageHandlers.setScreenProtection.postMessage(status);
    }
}
export function closeWebView() {
    if (window.JSReceiver)
        window.JSReceiver.closeWebView();
    if (window.webkit && window.webkit.messageHandlers)
        window.webkit.messageHandlers.closeWebView.postMessage("close");
}
export function openLink(url) {
    var _a;
    console.log("opening browser with this url", url);
    if ((window === null || window === void 0 ? void 0 : window.JSReceiver) && isAndroid) {
        window.JSReceiver.openLink(url);
    }
    if (((_a = window === null || window === void 0 ? void 0 : window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) && isIOS) {
        const message = JSON.stringify({ url });
        window.webkit.messageHandlers.openLink.postMessage(message);
    }
}
export function selectWalk(willOpen, callback) {
    console.log("selectWalk called");
    if (window && window.JSReceiver && isAndroid) {
        window.JSReceiver.onWalkCountConcentAccepted(willOpen); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if (window.webkit && window.webkit.messageHandlers && isIOS) {
        const message = JSON.stringify({ willOpen });
        window.webkit.messageHandlers.onWalkCountConcentAccepted.postMessage(message); //Toki app will inject by this function in iOS
    }
    window.refreshWalkCountUi = () => callback();
}
export function selectDownloadImage(type, callback) {
    console.log("selectDownloadImage called", type);
    if (window && window.JSReceiver && isAndroid) {
        window.JSReceiver.selectDownloadImage(type); //Toki app will inject by this function in Android;
    }
    // in case of iOS webkit
    if (window.webkit && window.webkit.messageHandlers && isIOS) {
        const message = JSON.stringify({
            url: type,
        });
        window.webkit.messageHandlers.selectDownloadImage.postMessage(message); //Toki app will inject by this function in iOS
    }
    callback();
    // window.downloadImageSelected = (data) => callback(data)
}
export function useQrScan({ value, setValue, Scan, }) {
    const [URL, setURL] = useState(value);
    useEffect(() => {
        if (URL) {
            setValue(URL);
        }
    }, [URL]);
    useEffect(() => {
        if (Scan > 0) {
            run();
        }
    }, [Scan]);
    const run = () => {
        if (window.JSReceiver) {
            window.JSReceiver.openNativeScanner(); //Toki app will inject by this function in Android;
        }
        // in case of iOS webkit
        if (window.webkit && window.webkit.messageHandlers) {
            const message = JSON.stringify({
                message: "Opening native scanner",
            });
            window.webkit.messageHandlers.openNativeScanner.postMessage(message); //Toki app will inject by this function in iOS
        }
        return (window.afterScan = (url) => setURL(url));
    };
}
export default {
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