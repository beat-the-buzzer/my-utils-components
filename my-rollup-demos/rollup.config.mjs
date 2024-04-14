import resolve from "@rollup/plugin-node-resolve"; // 外部的node模块 用到的代码也会打包进来
import commonjs from "@rollup/plugin-commonjs"; // 引用的node模块中有commonjs的语法，可以用这个插件转一下
import typescript from "@rollup/plugin-typescript"; // 支持TS模块
import strip from "@rollup/plugin-strip"; // 去除调试代码

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/myUtils.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/myUtils.js",
      format: "iife",
      name: 'myUtils'
    },
    {
      file: "dist/myUtils.umd.js",
      format: "umd",
      name: 'myUtils'
    },
    {
      file: "dist/myUtils.es.js",
      format: "es",
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), strip()],
};
