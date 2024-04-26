'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';
import { cn } from '@/lib/utils';
import LOGO from 'public/logo.svg';
export function Navbar(): ReactElement {
  const currentPathName = usePathname();

  return (
    <nav
      className={`main absolute inset-0 z-50 mx-auto flex h-max snap-start items-center justify-between py-2`}
    >
      <Image src={LOGO} alt="Adi Logo" width={72} height={22} className="grayscale" />
      <div className="flex gap-4">
        <Link
          className={cn('text-base opacity-80 leading-6 capitalize text-neutral-300 hover:blur-[1px]', {
            'font-bold opacity-100': currentPathName === '/',
          })}
          href={'/'}
        >
          About
        </Link>
        <Link
          className={cn('text-base opacity-80 leading-6 capitalize text-neutral-300 hover:blur-[1px]', {
            'font-bold opacity-100': currentPathName === '/work',
          })}
          href={'/work'}
        >
          Work
        </Link>
      </div>
    </nav>
  );
}
