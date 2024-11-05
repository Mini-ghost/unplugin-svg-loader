# @mini-ghost/unplugin-svg-loader

An unplugin that supports converting SVGs to base64 or extracting paths.

## Installation

```bash
npm i @mini-ghost/unplugin-svg-loader
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import SvgLoader from '@mini-ghost/unplugin-svg-loader/vite'

export default defineConfig({
  plugins: [
    SvgLoader(),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import SvgLoader from '@mini-ghost/unplugin-svg-loader/rollup'

export default {
  plugins: [
    SvgLoader(),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('@mini-ghost/unplugin-svg-loader/webpack')()
  ]
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('@mini-ghost/unplugin-svg-loader/webpack')(),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import SvgLoader from '@mini-ghost/unplugin-svg-loader/esbuild'

build({
  plugins: [SvgLoader()],
})
```

<br></details>

## Usage

### Base64

```ts
import unpluginBase64 from './assets/unplugin.svg?base64'
// 'data:image/svg+xml;base64,...'
```

### Path

```ts
import unpluginPath from './assets/unplugin.svg?path'
// 'M256 0H0V256H256V0Z M72.9779 273.931L73.3264...'
```

`*.svg?path` is very useful for allowing Echarts to use some simple icons.

```ts
import simpleIconPath from './assets/simple.svg?path'

const legend = {
  data: [
    { name: 'unplugin', icon: `path://${simpleIconPath}` },
    // ...
  ]
}
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Alex Liu](https://github.com/Mini-ghost)
