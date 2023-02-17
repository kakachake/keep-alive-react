import React from "react";
import CacheStore from "./cacheStore";
import { IKeepaliveItem } from "./keepAliveStore";
interface KeepaliveContextValue {
    cache: CacheStore<IKeepaliveItem>;
    get: (cacheId: string) => IKeepaliveItem | null;
    create: (cacheId: string, node: React.ReactNode, load: (currentNode: HTMLElement) => void) => void;
    active: (cacheId: string) => void;
    unActive: (cacheId: string) => void;
}
export declare function useKeepaliveContext(): KeepaliveContextValue;
export declare function KeepaliveContextProvide({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export {};
