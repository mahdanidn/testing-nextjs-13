import { DM_Sans, Inter, Roboto_Mono } from '@next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'optional'
});

export const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'optional',
});

export const dm_sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'optional'
});
