export function message(value) {
    if (window.CallTogtokhDev) {
        window.CallTogtokhDev.postMessage(value);
    }
}
export default {
    message,
};
//# sourceMappingURL=togtokh.js.map