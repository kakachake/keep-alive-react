import { useState } from "react";
import { KeepaliveItem } from "../../src/index";
import Text from "./component/text";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { useRoutes, useNavigate } from "react-router-dom";

const comps = [Text, Text];

function renderComp(idx: number) {
  const Comp = comps.map((Comp, _idx) => {
    console.log("renderComp", _idx);
    return (
      <KeepaliveItem cacheId={"text" + _idx}>
        <Comp id={_idx} key={_idx} />
      </KeepaliveItem>
    );
  });
  return Comp[idx];
}

const routes = [
  {
    path: "/page1",
    element: (
      <KeepaliveItem cacheId="/page1">
        <Page1 />
      </KeepaliveItem>
    ),
  },
  {
    path: "/page2",
    element: (
      <KeepaliveItem cacheId="/page2">
        <Page2 />
      </KeepaliveItem>
    ),
  },
];

function App() {
  const navigate = useNavigate();

  const [cur, setCur] = useState(0);
  const renderRoute = useRoutes(routes);
  return (
    <>
      <h2>组件演示：</h2>
      {comps.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              setCur(idx);
            }}
          >
            comp {idx}
          </button>
        );
      })}
      <div>{renderComp(cur)}</div>
      <h2>路由演示：</h2>
      {routes.map((route, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              navigate(route.path);
            }}
          >
            {route.path}
          </button>
        );
      })}
      <div>{renderRoute}</div>
    </>
  );
}

export default App;
