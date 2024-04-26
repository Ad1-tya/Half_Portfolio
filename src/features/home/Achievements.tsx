import Image from 'next/image';
import { ReactElement } from 'react';
import { Heading } from '@/components/heading';
import { AchievementsData } from '@/data/achievements';
import { SITE } from '@/config';

export const Achievements = (): ReactElement => {
  const achievements = AchievementsData.map((items) => (
    <div
      key={items.id}
      className="gap-4 relative group flex flex-row w-full min-w-[200px] shrink-0 items-center py-3"
    >
      <div className="pl-3">
        <Image
          src={`/images/achiev/${items.img}`}
          width={40}
          height={40}
          alt="Achievement Logos"
          className="inset-0 m-auto max-w-5 sm:max-h-[40px] sm:max-w-[40px] object-contain"
        />
      </div>  
      <div className="flex w-full flex-col gap-1">
        <p className="text-xsm text-neutral-300">{items.time}</p>
        <div className='flex gap-[4px] w-full flex-col'>
          <h4 className="text-lg text-purple-500">{items.title}</h4>
          <p className="text-sm">{items.company}</p>
        </div>
      </div>
        <hr className="h-[2px] sm:group-hover:scale-x-110 w-full transition-all duration-300 ease-in-out absolute bottom-0 bg-neutral-900"/>
    </div>
  ));

  return (
    <div id="achievements" className="main top-0 flex snap-start items-start flex-col">
      <div>
        <Heading title="Achievements" />
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-0 items-center">
        <div className="text-neutral-500 gap-1 sm:gap-0 items-start flex flex-row flex-wrap sm:flex-col sm:text-4xl text-lg w-full">
          {SITE.achievementsRoles.map((achievement, index) => (
            <div key={index}>
              {achievement}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap w-full items-end justify-center sm:justify-center">
          {achievements}
        </div>
      </div>
    </div>
  );
};
