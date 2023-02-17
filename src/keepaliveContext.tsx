import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import CacheStore from "./cacheStore";
import { useKeep } from "./hooks/";
import { IKeepaliveItem } from "./keepAliveStore";
import KeepaliveRenderItem from "./keepaliveRenderItem";

interface KeepaliveContextValue {
  cache: CacheStore<IKeepaliveItem>;
  get: (cacheId: string) => IKeepaliveItem | null;
  create: (
    cacheId: string,
    node: React.ReactNode,
    load: (currentNode: HTMLElement) => void
  ) => void;
  active: (cacheId: string) => void;
  unActive: (cacheId: string) => void;
}

const keepaliveContext = createContext<KeepaliveContextValue>(
  {} as KeepaliveContextValue
);

export function useKeepaliveContext() {
  return useContext(keepaliveContext);
}

export function KeepaliveContextProvide({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cache, get, create, active, unActive } = useKeep();

  return (
    <keepaliveContext.Provider value={{ cache, get, create, active, unActive }}>
      <>
        {children}
        {cache.map((item, idx) => {
          return (
            <KeepaliveRenderItem key={idx} {...item}></KeepaliveRenderItem>
          );
        })}
      </>
    </keepaliveContext.Provider>
  );
}
