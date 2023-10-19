declare global {
    interface Window {
        hpsPayment: any;
    }
}
export declare function buy(checkoutId: string): void;
declare const _default: {
    buy: typeof buy;
};
export default _default;
