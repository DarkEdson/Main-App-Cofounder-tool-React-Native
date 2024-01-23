import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes/v2'
import { createTamagui } from 'tamagui' // or '@tamagui/core'

const config  = createTamagui({
  themes,
  tokens,
  shorthands,
})

export type AppConfig = typeof config 

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config 