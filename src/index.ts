import fs from 'node:fs/promises'
import { Buffer } from 'node:buffer'
import type { UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'

export function unpluginFactory(): UnpluginOptions {
  const SVG_REGEX = /\.svg\?(?:base64|path)$/

  return {
    name: '@mini-ghost/unplugin-svg-loader',
    enforce: 'pre',

    async load(id) {
      if (!id.match(SVG_REGEX))
        return

      const [path, query] = id.split('?')

      let svgCode: string
      try {
        svgCode = await fs.readFile(path, 'utf-8')
      }
      catch {
        console.error(`[vite-svg-loader]: ${id} couldn't be loaded, fallback to default loader`)
        return
      }

      let code: string
      switch (query) {
        case 'path':
          code = toPath(svgCode)
          break
        case 'base64':
        default:
          code = toBase64(svgCode)
          break
      }

      return `export default '${code}'`
    },
  }
}

function toPath(code: string): string {
  const matches = code.match(/\sd="([^"]+)"/g)

  if (!matches)
    return ''

  return matches
    .map(match => match.slice(4, -1)) // Extract the ` d="..."` attribute value.
    .join(' ')
}

function toBase64(code: string): string {
  return `data:image/svg+xml;base64,${Buffer.from(code).toString('base64')}`
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
