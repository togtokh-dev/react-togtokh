declare global {
    interface Window {
        CallTogtokhDev?: {
            postMessage: (message: any) => void;
        };
    }
}
export declare function message(value: string): void;
declare const _default: {
    message: typeof message;
};
export default _default;
