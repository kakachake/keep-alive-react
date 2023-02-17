import React from "react";
interface UseKeepItemOptions {
    cacheId: string;
    load: (currentNode: HTMLElement) => void;
    children: React.ReactNode;
}
export declare function useKeepItem(props: UseKeepItemOptions): void;
export {};
