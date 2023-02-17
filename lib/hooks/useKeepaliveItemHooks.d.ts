import { KeepaliveHooks } from "../keepAliveStore";
import React from "react";
export declare function KeepaliveItemContextProvider(props: {
    cacheId: string;
    children: React.ReactNode;
}): JSX.Element;
export declare function useKeepaliveItemContext(): {
    cacheId: string;
};
export declare function useKeepaliveItemHooks(hooks: KeepaliveHooks): void;
