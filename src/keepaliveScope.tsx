import React from "react";
import { KeepaliveContextProvide } from "./keepaliveContext";

export default function KeepaliveScope(props: { children: React.ReactNode }) {
  const { children } = props;
  return <KeepaliveContextProvide>{children}</KeepaliveContextProvide>;
}
