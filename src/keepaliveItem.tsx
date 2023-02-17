import React, { useRef } from "react";
import { useKeepItem } from "./hooks/";

interface KeepaliveItemProps {
  children: React.ReactNode;
  cacheId: string;
}

function KeepaliveItem(props: KeepaliveItemProps) {
  const { children, cacheId } = props;

  const elRef = useRef<HTMLDivElement>(null);
  const load = (currentNode: HTMLElement) => {
    if (elRef.current) {
      elRef.current.innerHTML = "";
      elRef.current.appendChild(currentNode);
    }
  };
  useKeepItem({
    cacheId,
    load,
    children,
  });

  return <div ref={elRef}></div>;
}

export default KeepaliveItem;
