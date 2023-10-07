"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_transition_group_1 = require("react-transition-group");
const TransitionContext = react_1.default.createContext({
    parent: {},
});
function useIsInitialRender() {
    const isInitialRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}
function CSSTransition(_a) {
    var { show, enter = "", enterStart = "", enterEnd = "", leave = "", leaveStart = "", leaveEnd = "", appear, unmountOnExit, tag = "div", children } = _a, rest = __rest(_a, ["show", "enter", "enterStart", "enterEnd", "leave", "leaveStart", "leaveEnd", "appear", "unmountOnExit", "tag", "children"]);
    const enterClasses = enter.split(" ").filter((s) => s.length);
    const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
    const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
    const leaveClasses = leave.split(" ").filter((s) => s.length);
    const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
    const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
    const removeFromDom = unmountOnExit;
    function addClasses(node, classes) {
        classes.length && node.classList.add(...classes);
    }
    function removeClasses(node, classes) {
        classes.length && node.classList.remove(...classes);
    }
    const nodeRef = react_1.default.useRef(null);
    const Component = tag;
    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: appear, nodeRef: nodeRef, unmountOnExit: removeFromDom, in: show, addEndListener: (done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
        }, onEnter: () => {
            if (!removeFromDom)
                nodeRef.current.style.display = null;
            addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
        }, onEntering: () => {
            removeClasses(nodeRef.current, enterStartClasses);
            addClasses(nodeRef.current, enterEndClasses);
        }, onEntered: () => {
            removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
        }, onExit: () => {
            addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
        }, onExiting: () => {
            removeClasses(nodeRef.current, leaveStartClasses);
            addClasses(nodeRef.current, leaveEndClasses);
        }, onExited: () => {
            removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
            if (!removeFromDom)
                nodeRef.current.style.display = "none";
        } },
        react_1.default.createElement(Component, Object.assign({ ref: nodeRef }, rest, { style: { display: !removeFromDom ? "none" : null } }), children)));
}
function Transition(_a) {
    var { show, appear } = _a, rest = __rest(_a, ["show", "appear"]);
    const { parent } = (0, react_1.useContext)(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;
    if (isChild) {
        return (react_1.default.createElement(CSSTransition, Object.assign({ appear: parent.appear || !parent.isInitialRender, show: parent.show }, rest)));
    }
    return (react_1.default.createElement(TransitionContext.Provider, { value: {
            parent: {
                show,
                isInitialRender,
                appear,
            },
        } },
        react_1.default.createElement(CSSTransition, Object.assign({ appear: appear, show: show }, rest))));
}
exports.default = Transition;
//# sourceMappingURL=transition.js.map