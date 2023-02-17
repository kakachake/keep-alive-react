import { useEffect, useState } from "react";
import KeepaliveStore, { ACITON_CREATED } from "../keepAliveStore";

export function useKeep() {
  const [_, forceUpdate] = useState({} as any);
  const [store] = useState<KeepaliveStore>(new KeepaliveStore(forceUpdate));
  useEffect(() => {
    return () => {
      store?.destroy();
    };
  }, []);

  function create(
    cacheId: string,
    children: React.ReactNode,
    load: (currentNode: HTMLElement) => void
  ) {
    store.create({
      cacheId,
      children,
      load,
    });
  }

  function active(cacheId: string) {
    store.active(cacheId);
  }

  function unActive(cacheId: string) {
    store.unActive(cacheId);
  }

  return {
    cache: store,
    get: store.get.bind(store),
    create,
    active,
    unActive,
  };
}
