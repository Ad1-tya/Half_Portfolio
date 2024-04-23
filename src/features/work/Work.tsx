'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { WorkData } from '@/data';

export const Work = () => {
  const router = useRouter();

  const [percentage, setPercentage] = useState(0);

  const handleRoute = (workurl: string): void => {
    if (workurl) router.push(`/work/${workurl}`);
  };

  const cardSlide = useRef<HTMLDivElement>(null);

  const scrollHandler = (e: React.WheelEvent<HTMLDivElement>): void => {
    const container = cardSlide.current;
    if (!container) return;

    const divideY = e.deltaY / 10;
    const divideX = e.deltaX / 10;
    const newPercentage = percentage + divideX + divideY;

    if (newPercentage <= 300 && newPercentage >= 0) {
      setPercentage(newPercentage);
      container.style.transition = 'transform 0.3s ease-out';
      container.style.transform = `translate(-${percentage / 4}%, 0%)`;
    }
  };

  const Cards = WorkData.map((items) => (
    <div
      key={items.id}
      id="works"
      className="flex flex-col items-start gap-[1.25rem] hover:transition-all sm:hover:scale-105"
      onClick={() => handleRoute(String(items.id))}
    >
      <div className="relative h-[320px] w-[270px] border-2 border-purple-900/30 object-center hover:border-purple-600 xl:h-[400px] xl:w-[352px]">
        <Image
          src={`/images/work/${items.img}`}
          alt="Card Image"
          fill={true}
          className="snap-center object-cover grayscale transition-all hover:grayscale-0"
          objectPosition={`${percentage / 3}% 100%`}
          sizes="(max-width: 808px) 50vw, 100vw"
          priority={true}
        />
      </div>
      <p>{items.title}</p>
    </div>
  ));

  return (
    <section className="flex h-screen w-screen items-center" onWheel={scrollHandler}>
      <div
        ref={cardSlide}
        className="scrollbar-hide relative flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[10%] sm:top-[5%] sm:overflow-visible sm:pl-[50%] lg:gap-6"
      >
        {Cards}
      </div>
    </section>
  );
};
