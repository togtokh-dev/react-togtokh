declare global {
    interface Window {
        contactSelected: any;
        refreshWalkCountUi: any;
        afterPurchase: any;
        isEnabledNotification: any;
        JSReceiver: any;
        webkit: any;
    }
}
export declare function buy(merchantId: string, amount: number, orderId: string, description: string, callback: Function, callbackUrl: string): void;
export declare function selectContact(type: boolean, callback: any): void;
export declare function checkNotification(callback: Function): void;
export declare function setColor(color: string, isStatusDark: boolean): void;
export declare function setScreenProtection(status: boolean): void;
export declare function closeWebView(): void;
export declare function openLink(url: string): void;
export declare function selectWalk(willOpen: any, callback: any): void;
export declare function selectDownloadImage(type: any, callback: any): void;
declare const _default: {
    buy: typeof buy;
    selectContact: typeof selectContact;
    checkNotification: typeof checkNotification;
    setColor: typeof setColor;
    setScreenProtection: typeof setScreenProtection;
    closeWebView: typeof closeWebView;
    selectWalk: typeof selectWalk;
    selectDownloadImage: typeof selectDownloadImage;
};
export default _default;
