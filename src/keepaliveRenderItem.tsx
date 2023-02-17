import { ACTION_ACTIVED, IKeepaliveItem } from "./keepAliveStore";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function KeepaliveRenderItem(props: IKeepaliveItem) {
  const currentDOM = useRef<HTMLDivElement>(null);
  const { children, load, status, fragment } = props;

  const element = ReactDOM.createPortal(
    <div ref={currentDOM}>{children}</div>,
    document.body
  );

  useEffect(() => {
    if (status === ACTION_ACTIVED) {
      load && load(currentDOM.current!);
    } else {
      fragment.appendChild(currentDOM.current!);
    }
  }, [status]);
  return element;
}
