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
import React, { useRef, useEffect, useContext } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";
const TransitionContext = React.createContext({
    parent: {},
});
function useIsInitialRender() {
    const isInitialRender = useRef(true);
    useEffect(() => {
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
    const nodeRef = React.useRef(null);
    const Component = tag;
    return (React.createElement(ReactCSSTransition, { appear: appear, nodeRef: nodeRef, unmountOnExit: removeFromDom, in: show, addEndListener: (done) => {
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
        React.createElement(Component, Object.assign({ ref: nodeRef }, rest, { style: { display: !removeFromDom ? "none" : null } }), children)));
}
function Transition(_a) {
    var { show, appear } = _a, rest = __rest(_a, ["show", "appear"]);
    const { parent } = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;
    if (isChild) {
        return (React.createElement(CSSTransition, Object.assign({ appear: parent.appear || !parent.isInitialRender, show: parent.show }, rest)));
    }
    return (React.createElement(TransitionContext.Provider, { value: {
            parent: {
                show,
                isInitialRender,
                appear,
            },
        } },
        React.createElement(CSSTransition, Object.assign({ appear: appear, show: show }, rest))));
}
export default Transition;
//# sourceMappingURL=transition.js.map