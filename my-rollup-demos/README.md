# 构建自己的前端方法库——rollup

Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。这在未来将在所有场景原生支持，但 Rollup 让你今天就可以开始这样做。

## 使用 rollup 打包第一个模块

### 打包成三种不同的代码格式

```shell
pnpm install -g rollup
pnpm install -D rollup
```

```shell
rollup src/main.js --format iife --name "myUtils" --file dist/bundle.js # 浏览器端使用 自执行函数
rollup src/main.js --format cjs --file dist/bundle.cjs.js # node端使用 CommonJs
rollup src/main.js --format umd --name "myUtils" --file dist/bundle.umd.js # 通用 UMD
```

可直接输入打包命令，或者新建`rollup.config.mjs`文件，将相关配置写在文件里，然后执行`rollup -c`去读取配置文件。

```js
export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.cjs.js",
    format: "cjs"
  }
};
```

### 使用外部的资源

如果在项目里使用了外面资源，例如lodash-es，rollup不知道如何去处理这依赖，此时我们需要对外部依赖做一些特殊处理。

使用插件`@rollup/plugin-node-resolve`，这样就可以加载外部模块的资源，打包到自己的bundle里；

```shell
pnpm install @rollup/plugin-node-resolve -D
```

此时，lodash-es内的代码也被打包放到bundle文件里了。

如果有些模块，我们不希望将其打包过来，可以配置`external`属性

```js
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
    },
    plugins: [resolve()],
    external: ['lodash-es']
}
```

当外部模块较多时，我们在external里一个个加上去，会很麻烦，我们可以使用插件。

### 源码使用Common.js

如果源码或者第三方代码使用的是commonjs，rollup处理的时候会报错，我们需要用`@rollup/plugin-commonjs`插件进行处理

```shell
pnpm install @rollup/plugin-commonjs -D
```

### 使用TS

```shell
pnpm install @rollup/plugin-typescript -D
```

### 去除调试代码 例如 console debugger

```shell
pnpm install @rollup/plugin-strip -D
```
