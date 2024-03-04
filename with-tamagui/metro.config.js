// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: false,
})

// 2. Enable Tamagui
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})

// REMOVE THIS (just for tamagui internal devs to work in monorepo):
// if (process.env.IS_TAMAGUI_DEV && __dirname.includes('tamagui')) {
//   const fs = require('fs')
//   const path = require('path')
//   const projectRoot = __dirname
//   const monorepoRoot = path.resolve(projectRoot, '../..')
//   config.watchFolders = [monorepoRoot]
//   config.resolver.nodeModulesPaths = [
//     path.resolve(projectRoot, 'node_modules'),
//     path.resolve(monorepoRoot, 'node_modules'),
//   ]
//   // have to manually de-deupe
//   try {
//     fs.rmSync(path.join(projectRoot, 'node_modules', '@tamagui'), {
//       recursive: true,
//       force: true,
//     })
//   } catch {}
//   try {
//     fs.rmSync(path.join(projectRoot, 'node_modules', 'tamagui'), {
//       recursive: true,
//       force: true,
//     })
//   } catch {}
//   try {
//     fs.rmSync(path.join(projectRoot, 'node_modules', 'react'), {
//       recursive: true,
//       force: true,
//     })
//   } catch {}
//   try {
//     fs.rmSync(path.join(projectRoot, 'node_modules', 'react-dom'), {
//       recursive: true,
//       force: true,
//     })
//   } catch {}
// }
