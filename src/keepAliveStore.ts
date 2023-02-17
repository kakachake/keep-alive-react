import CacheStore from "./cacheStore";

export const ACITON_CREATED = "created"; /* 缓存创建 */
export const ACTION_ACTIVED = "actived"; /* 激活完成 */
export const ACTION_UNACTIVED = "unActived"; /* 休眠完成 */
export const ACTION_DESTROYED = "destroyed"; /* 摧毁缓存 */

export const status = [
  ACITON_CREATED,
  ACTION_ACTIVED,
  ACTION_UNACTIVED,
  ACTION_DESTROYED,
] as const;

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
  constructor(update: React.Dispatch<any>, max: number = 10) {
    super(max);
    this.update = update;
  }

  create(payload: KeepalivePayload) {
    this.set(payload.cacheId, {
      status: ACITON_CREATED,
      fragment: document.createDocumentFragment(),
      ...payload,
    });
    this.active(payload.cacheId);
  }

  active(cacheId: string) {
    const item = this.get(cacheId);
    item?.hooks?.beforeActived?.(item);
    if (item && item.status !== ACTION_ACTIVED) {
      item.status = ACTION_ACTIVED;
      this.update({});
      item.hooks?.actived?.(item);
    }
  }

  unActive(cacheId: string) {
    const item = this.get(cacheId);
    item?.hooks?.beforeUnActived?.(item);
    if (item && item.status !== ACTION_UNACTIVED) {
      item.status = ACTION_UNACTIVED;
      this.update({});
      item.hooks?.unActived?.(item);
    }
  }
}
