import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/app/loading';
import { cn } from '@/lib/utils';

const inter = Raleway({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Adi',
  description: 'UI/UX Designer / Frontend Developer',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'scrollbar-hide')}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
