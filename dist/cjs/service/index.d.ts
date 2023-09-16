declare const _default: {
    TOKI: {
        buy: typeof import("./toki").buy;
        selectContact: typeof import("./toki").selectContact;
        checkNotification: typeof import("./toki").checkNotification;
        setColor: typeof import("./toki").setColor;
        setScreenProtection: typeof import("./toki").setScreenProtection;
        closeWebView: typeof import("./toki").closeWebView;
        selectWalk: typeof import("./toki").selectWalk;
        selectDownloadImage: typeof import("./toki").selectDownloadImage;
    };
    cookie: {
        setCookie: (key: string, value: string, exdays: number) => 0 | 1;
        getCookie: (key: string) => string | null;
    };
    format: {
        currencyFormat: (num: any) => any;
        formatValue: (value: number) => string;
        formatThousands: (value: number) => string;
    };
    support: {
        clipboard: (value: string) => 0 | 1;
        useParam: typeof import("./support").useParam;
        useQuery: typeof import("./support").useQuery;
        hexToRGB: (h: any) => string;
    };
};
export default _default;
