declare global {
  interface Window {
    CallTogtokhDev?: {
      postMessage: (message: any) => void;
    };
  }
}

export function message(value: string) {
  if (window.CallTogtokhDev) {
    window.CallTogtokhDev.postMessage(value);
  }
}

export default {
  message,
};
