declare global {
  interface Window {
    hpsPayment: any;
  }
}
export function buy(checkoutId: string) {
  window?.hpsPayment(checkoutId);
}
export default {
  buy,
};
