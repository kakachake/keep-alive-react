import { createContext, useContext } from "react";
import { IKeepaliveItem, KeepaliveHooks } from "../keepAliveStore";
import React from "react";
import { useKeepaliveContext } from "../keepaliveContext";

const keepaliveItemContext = createContext<{
  cacheId: string;
}>({} as { cacheId: string });

export function KeepaliveItemContextProvider(props: {
  cacheId: string;
  children: React.ReactNode;
}) {
  return (
    <keepaliveItemContext.Provider
      value={{
        cacheId: props.cacheId,
      }}
    >
      {props.children}
    </keepaliveItemContext.Provider>
  );
}

export function useKeepaliveItemContext() {
  return useContext(keepaliveItemContext);
}

export function useKeepaliveItemHooks(hooks: KeepaliveHooks) {
  const { cacheId } = useKeepaliveItemContext();
  if (!cacheId) {
    return;
  }
  const { get } = useKeepaliveContext();
  const keepaliveItem = get(cacheId) as IKeepaliveItem;
  keepaliveItem.hooks = hooks;
}
