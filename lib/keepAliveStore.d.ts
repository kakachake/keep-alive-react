/// <reference types="react" />
import CacheStore from "./cacheStore";
export declare const ACITON_CREATED = "created";
export declare const ACTION_ACTIVED = "actived";
export declare const ACTION_UNACTIVED = "unActived";
export declare const ACTION_DESTROYED = "destroyed";
export declare const status: readonly ["created", "actived", "unActived", "destroyed"];
interface KeepalivePayload {
    cacheId: string;
    children: any;
    load: (currentNode: HTMLElement) => void;
    hooks?: KeepaliveHooks;
}
export type KeepaliveHooks = {
    beforeCreated?: (keepaliveItem: IKeepaliveItem) => void;
    created?: (keepaliveItem: IKeepaliveItem) => void;
    beforeActived?: (keepaliveItem: IKeepaliveItem) => void;
    actived?: (keepaliveItem: IKeepaliveItem) => void;
    beforeUnActived?: (keepaliveItem: IKeepaliveItem) => void;
    unActived?: (keepaliveItem: IKeepaliveItem) => void;
};
export type IKeepaliveItem = {
    fragment: DocumentFragment;
    status: typeof status[number];
} & KeepalivePayload;
export default class KeepaliveStore extends CacheStore<IKeepaliveItem> {
    update: React.Dispatch<any>;
    constructor(update: React.Dispatch<any>, max?: number);
    create(payload: KeepalivePayload): void;
    active(cacheId: string): void;
    unActive(cacheId: string): void;
}
export {};
