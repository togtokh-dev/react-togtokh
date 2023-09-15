declare const _default: {
    MiniWeb: {
        Button: {
            SM: typeof import("./components/mini-web/button/sm").default;
            MD: typeof import("./components/mini-web/button/md").default;
            LG: typeof import("./components/mini-web/button/lg").default;
            XL: typeof import("./components/mini-web/button/xl").default;
        };
        Form: {
            Input: {
                LG: typeof import("./components/mini-web/form/input/lg").default;
                XL: typeof import("./components/mini-web/form/input/xl").default;
            };
        };
    };
    ResWeb: {
        Button: {
            SM: typeof import("./components/web/button/sm").default;
            MD: typeof import("./components/web/button/md").default;
            LG: typeof import("./components/web/button/lg").default;
            XL: typeof import("./components/web/button/xl").default;
        };
        Form: {
            Input: {
                LG: typeof import("./components/web/form/input/lg").default;
                XL: typeof import("./components/web/form/input/xl").default;
            };
            dropdown: {
                Default: typeof import("./components/web/form/dropdown/default").default;
                Datepicker: typeof import("./components/web/form/dropdown/datepicker").default;
            };
        };
    };
    service: {
        TOKI: {
            buy: typeof import("./service/toki").buy;
            selectContact: typeof import("./service/toki").selectContact;
            checkNotification: typeof import("./service/toki").checkNotification;
            setColor: typeof import("./service/toki").setColor;
            setScreenProtection: typeof import("./service/toki").setScreenProtection;
            closeWebView: typeof import("./service/toki").closeWebView;
            selectWalk: typeof import("./service/toki").selectWalk;
            selectDownloadImage: typeof import("./service/toki").selectDownloadImage;
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
            useParam: typeof import("./service/support").useParam;
            useQuery: typeof import("./service/support").useQuery;
            hexToRGB: (h: any) => string;
        };
    };
    utils: {
        Transition: typeof import("./utils/transition").default;
    };
};
export default _default;
