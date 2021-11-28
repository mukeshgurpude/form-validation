export declare const $: {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    <K_1 extends keyof SVGElementTagNameMap>(selectors: K_1): SVGElementTagNameMap[K_1] | null;
    <E extends Element = Element>(selectors: string): E | null;
};
export declare const $$: {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    <K_1 extends keyof SVGElementTagNameMap>(selectors: K_1): NodeListOf<SVGElementTagNameMap[K_1]>;
    <E extends Element = Element>(selectors: string): NodeListOf<E>;
};
export declare function showMessage(msg?: string, tag?: 'error' | 'success'): void;
