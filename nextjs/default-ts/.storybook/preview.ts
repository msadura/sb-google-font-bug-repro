import type { Preview } from '@storybook/react';
import { PT_Sans_Narrow } from 'next/font/google';

export const font = PT_Sans_Narrow({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['Georgia', 'ui-serif', 'serif'],
  weight: ['400', '700']
});

console.log('🔥 loaded google font:', font);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
