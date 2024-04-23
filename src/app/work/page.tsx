import React from 'react';
import { Navbar } from '@/components/navbar';
import { Work } from '@/features/work';

export default function WorkPage() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-neutral-950">
      <Navbar />
      <Work />
    </section>
  );
}
