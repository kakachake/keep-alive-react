import { useState } from "react";
import { useKeepaliveItemHooks } from "../../../src/";

function Text({ id }: { id: number }) {
  const [count, setCount] = useState(0);
  useKeepaliveItemHooks({
    beforeActived: () => {
      console.log("beforeActivate", id);
    },
    actived: () => {
      console.log("activate", id);
    },
    beforeUnActived: () => {
      console.log("beforeUnActivate", id);
    },
    unActived: () => {
      console.log("UnActivate", id);
    },
  });
  return (
    <div>
      <button
        onClick={() => {
          console.log("click");
          setCount(count + 1);
        }}
      >
        {count}++
      </button>

      <h3>Text {id}</h3>
      <input type="text" />
    </div>
  );
}

export default Text;
