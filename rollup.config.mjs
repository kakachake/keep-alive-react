import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    name: "keepaliveComponent",
    file: "lib/index.js",
    format: "umd",
    sourcemap: true,
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".ts", "tsx"],
    }),
    typescript(),
  ],
};
