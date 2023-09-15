const setCookie = (key, value, exdays) => {
    try {
        const exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        const new_value = escape(value) +
            (exdays == null ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = key + "=" + new_value;
        return 1;
    }
    catch (error) {
        return 0;
    }
};
const getCookie = (key) => {
    try {
        let i, x, y;
        const ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == key) {
                return unescape(y);
            }
        }
        return null;
    }
    catch (error) {
        return null;
    }
};
export default { setCookie, getCookie };
//# sourceMappingURL=cookie.js.map