import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
} from 'unocss';
import { presetTypography } from '@unocss/preset-typography';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      fontFamily: {
        sans: "'Inter', sans-serif",
        mono: "'Fira Code', monospace",
        zain: ['"Zain"', 'sans-serif'],
        vip: ['"VIP"', 'sans-serif'],
        cairo: ['"cairo"', 'sans-serif'],
        lemon: ['"lemon"', 'sans-serif'],
      },
      breakpoints: {
        sm: '320px',
        md: '912px',
        lg: '1360px',
      },
      colors: {
        main: '#505443',
        secondary: '#7F8860',
        accent: '#6A7057',
        grey: {
          light: '#EFEEEE',
          dark: '#858282',
        },
      },
    },
    presets: [
      presetAttributify({ strict }),
      presetUno(),
      presetIcons(),
      presetTypography(),
    ],
  });
}

export default createConfig();