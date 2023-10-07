export declare function useQuery(): URLSearchParams;
export declare function useParam(): Readonly<import("react-router-dom").Params<string>>;
export declare const hexToRGB: (h: any) => string;
declare const _default: {
    clipboard: (value: string) => 1 | 0;
    useParam: typeof useParam;
    useQuery: typeof useQuery;
    hexToRGB: (h: any) => string;
};
export default _default;
