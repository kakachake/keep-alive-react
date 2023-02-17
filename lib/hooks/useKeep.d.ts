import KeepaliveStore from "../keepAliveStore";
export declare function useKeep(): {
    cache: KeepaliveStore;
    get: (key: string) => import("../keepAliveStore").IKeepaliveItem | null;
    create: (cacheId: string, children: React.ReactNode, load: (currentNode: HTMLElement) => void) => void;
    active: (cacheId: string) => void;
    unActive: (cacheId: string) => void;
};
