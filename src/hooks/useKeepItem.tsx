import React from "react";
import { useEffect } from "react";
import { useKeepaliveContext } from "../keepaliveContext";
import { KeepaliveItemContextProvider } from ".";

interface UseKeepItemOptions {
  cacheId: string;
  load: (currentNode: HTMLElement) => void;
  children: React.ReactNode;
}

export function useKeepItem(props: UseKeepItemOptions) {
  const { cacheId, load, children } = props;
  const { get, create, active, unActive } = useKeepaliveContext();

  const renderChildren = () => {
    return (
      <KeepaliveItemContextProvider cacheId={cacheId}>
        {children}
      </KeepaliveItemContextProvider>
    );
  };

  const first = get(cacheId) ? false : true;
  useEffect(() => {
    if (!first) {
      active(cacheId);
    } else {
      create(cacheId, renderChildren(), load);
    }
    return () => {
      unActive(cacheId);
    };
  }, [cacheId, children]);
}
