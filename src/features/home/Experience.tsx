import Image from 'next/image';
import { ReactElement } from 'react';
import { Heading } from '@/components/heading';
import { ExperienceData } from '@/data/experience';

export const Experience = (): ReactElement => {
  const experience = ExperienceData.map((items) => (
    <div
      key={items.id}
      className="gap-2 sm:gap-4 group flex w-full min-w-[200px] shrink-0 flex-col items-center justify-center p-2 sm:p-4 transition-all sm:w-[40vw]  lg:w-[352px]"
    >
      <Image
        src={`/images/exp/${items.img}`}
        width={40}
        height={40}
        alt="Experience Logos"
        className="inset-0 group-hover:wiggleAnimation m-auto max-w-5 sm:max-h-[40px] sm:max-w-[40px] object-contain"
      />
      <div className="flex w-full flex-col items-center gap-[4px] sm:gap-1">
        <h4 className="text-purple-500">{items.title}</h4>
        <div className='flex sm:gap-2 flex-col items-center'>
          <p>{items.company}</p>
          <p className="text-neutral-300">{items.time}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="experience" className="main top-0 flex snap-start flex-col items-center">
      <div>
        <Heading title="Experience" />
      </div>
      <div className="flex flex-wrap gap-3 items-end justify-center sm:justify-center lg:gap-5">
        {experience}
      </div>
    </div>
  );
};
