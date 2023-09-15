declare const _default: {
    Button: {
        SM: typeof import("./button/sm").default;
        MD: typeof import("./button/md").default;
        LG: typeof import("./button/lg").default;
        XL: typeof import("./button/xl").default;
    };
    Form: {
        Input: {
            LG: typeof import("./form/input/lg").default;
            XL: typeof import("./form/input/xl").default;
        };
        dropdown: {
            Default: typeof import("./form/dropdown/default").default;
            Datepicker: typeof import("./form/dropdown/datepicker").default;
        };
    };
};
export default _default;
