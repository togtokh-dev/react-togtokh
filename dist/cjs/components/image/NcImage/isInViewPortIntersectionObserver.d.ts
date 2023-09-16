export interface InviewPortType {
    callback: () => void;
    target: HTMLElement | null;
    options: IntersectionObserverInit | undefined;
    freezeOnceVisible: boolean;
}
declare const checkInViewIntersectionObserver: ({ target, options, callback, freezeOnceVisible, }: InviewPortType) => void;
export default checkInViewIntersectionObserver;
