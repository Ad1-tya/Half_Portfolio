'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';
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
      container.style.transform = `translate(-${percentage / 4}%, 0%)`;
    }
  };


  const Cards = WorkData.map((items) => (
    <div
      key={items.id}
      id="works"
      className="flex flex-col items-center gap-[1rem] transition-all duration-200 ease-in-out hover:scale-105"
      onClick={() => handleRoute(String(items.id))}
    >
      <div className="relative h-[320px] w-[270px] border-2 border-purple-900/30 object-center xl:h-[400px] xl:w-[352px]">
        <Image
          src={`/images/work/${items.img}`}
          alt="Card Image"
          fill={true}
          className="snap-center object-cover transition-objectPosition"
          objectPosition={`${(-percentage / 5)+70}% 100%`}
          sizes="(max-width: 808px) 50vw, 100vw"
          priority={true}
        />
        <svg className='opacity-0 size-6  absolute m-auto inset-0 z-10 transition-opacity duration-200' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.5C16 4.94772 15.5523 4.5 15 4.5C14.4477 4.5 14 4.94772 14 5.5V14H5.5C4.94772 14 4.5 14.4477 4.5 15C4.5 15.5523 4.94772 16 5.5 16H14V24.5C14 25.0522 14.4477 25.5 15 25.5C15.5523 25.5 16 25.0522 16 24.5V16H24.5C25.0522 16 25.5 15.5523 25.5 15C25.5 14.4477 25.0522 14 24.5 14H16V5.5Z" fill="#A562EA"/>
        </svg>
      </div>
      <p className='sm:text-base'>{items.title}</p>
    </div>
  ));

  return (
    <section className="flex h-screen w-screen justify-center sm:justify-start items-center" onWheel={scrollHandler}>
      <div
        ref={cardSlide}
        className="scrollbar-hide transition-cardPosition relative flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[10%] sm:top-[5%] sm:overflow-visible sm:pl-[50%]"
      >
        {Cards}
      </div>
      <div className={`opacity-80 ${percentage==0? `flex`:`hidden`} absolute top-[85%] sm:top-auto sm:left-[20%] items-center flex-row gap-3`}>
        <svg className="w-max sm:block hidden scale-90" xmlns="http://www.w3.org/2000/svg" width="22" height="51" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.469 0c1.75 0 2.49.149 4.151.893 1.157.536 2.55 1.488 3.381 2.322.056.055.114.112.172.174 2.55 2.683 2.883 6.714 2.883 10.416v8.188a8.91 8.91 0 0 1-.83 3.756c-.446.982-1.424 2.411-2.225 3.185-.771.774-2.195 1.786-3.173 2.232-1.513.715-2.165.834-4.3.834s-2.788-.12-4.3-.834c-.979-.446-2.402-1.458-3.173-2.232a5.945 5.945 0 0 1-.173-.174C.333 26.077 0 22.046 0 18.343v-8.187C0 8.858.283 7.576.83 6.4c.445-.982 1.394-2.381 2.076-3.096.712-.744 2.135-1.726 3.322-2.292C7.978.18 8.63.03 10.468 0ZM4.745 4.912c-1.097 1.071-1.66 1.935-2.017 3.125-.445 1.4-.504 2.62-.445 8.633.09 6.697.12 7.055.801 8.335.386.744 1.038 1.726 1.483 2.173.415.476 1.453 1.22 2.254 1.637 1.216.655 1.868.774 3.707.804 1.75 0 2.52-.15 3.558-.715.742-.387 1.72-1.042 2.165-1.488.475-.417 1.216-1.429 1.631-2.262.526-.977.801-2.07.801-3.18v-9.003c0-2.947-.219-6.295-2.432-8.238-.445-.446-1.423-1.101-2.165-1.459-.8-.416-2.046-.714-3.113-.774a8.347 8.347 0 0 0-3.263.387c-.978.328-1.986 1.013-2.965 2.025Zm5.753 1.637c.267-.03.652.149.83.357.258.258.356 1.17.297 2.739-.03 1.845-.178 2.41-.563 2.679-.386.238-.682.238-1.038 0-.416-.268-.564-.834-.593-2.68-.06-1.398.059-2.5.237-2.708.178-.209.563-.387.83-.387Z" fill="#8F42DB"/><path d="M11 47.855c-3.325-3.33-4.512-4.312-4.75-4.312-.267 0-.653.149-.89.357-.238.208-.386.565-.356.803.03.267 1.306 1.725 2.79 3.212C9.308 49.432 10.762 50.68 11 50.68c.237 0 1.691-1.25 3.176-2.736 1.514-1.517 2.76-2.975 2.76-3.212 0-.238-.148-.625-.356-.833-.208-.208-.564-.357-.801-.357-.238 0-1.396.981-2.613 2.17L11 47.856Z" fill="#8F42DB"/><path d="M11 41.312C7.675 37.982 6.488 37 6.25 37c-.267 0-.653.149-.89.357-.238.208-.386.565-.356.803.03.268 1.306 1.725 2.79 3.212 1.514 1.517 2.968 2.766 3.206 2.766.237 0 1.691-1.25 3.176-2.736 1.514-1.517 2.76-2.974 2.76-3.212s-.148-.625-.356-.833c-.208-.208-.564-.357-.801-.357-.238 0-1.396.981-2.613 2.171L11 41.312Z" fill="#8F42DB"/></svg>  
        <svg className='w-max block sm:hidden scale-90' xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.086 0c2.187 0 3.113.186 5.19 1.116 1.445.67 3.187 1.86 4.225 2.903.07.068.143.14.215.217 3.187 3.354 3.603 8.393 3.603 13.02v10.235c0 1.622-.354 3.224-1.037 4.695-.557 1.228-1.78 3.014-2.78 3.981-.965.968-2.744 2.233-3.967 2.791-1.89.893-2.706 1.042-5.375 1.042-2.67 0-3.485-.149-5.375-1.042-1.224-.558-3.003-1.823-3.967-2.79a7.136 7.136 0 0 1-.215-.218C.417 32.596 0 27.557 0 22.93V12.694C0 11.073.354 9.471 1.038 8c.556-1.228 1.742-2.977 2.595-3.87.89-.93 2.669-2.158 4.152-2.865C9.972.223 10.787.037 13.085 0ZM5.93 6.14c-1.371 1.34-2.076 2.418-2.52 3.907-.557 1.748-.63 3.274-.557 10.79.112 8.372.149 8.819 1.001 10.419.482.93 1.298 2.158 1.854 2.716.519.595 1.816 1.526 2.817 2.047 1.52.818 2.335.967 4.634 1.004 2.187 0 3.15-.186 4.448-.893.927-.483 2.15-1.302 2.706-1.86.593-.521 1.52-1.786 2.039-2.828a8.388 8.388 0 0 0 1-3.974V16.214c0-3.683-.273-7.868-3.039-10.298-.556-.558-1.78-1.376-2.706-1.823-1-.52-2.558-.893-3.892-.967a10.434 10.434 0 0 0-4.078.483c-1.223.41-2.484 1.265-3.707 2.53Zm7.192 2.046c.333-.037.815.186 1.038.447.32.322.444 1.463.37 3.423-.037 2.307-.222 3.014-.704 3.349-.482.297-.853.297-1.297 0-.52-.335-.705-1.042-.742-3.35-.074-1.748.074-3.125.297-3.385.222-.26.704-.484 1.038-.484Z" fill="#8F42DB"/><path d="M46.468 20.009c-4.163 4.155-5.39 5.64-5.39 5.936 0 .334.186.817.446 1.113.26.297.706.483 1.004.446.334-.037 2.156-1.633 4.015-3.488C48.439 22.124 50 20.306 50 20.009c0-.297-1.561-2.115-3.42-3.97-1.896-1.893-3.718-3.45-4.015-3.45-.297 0-.78.185-1.041.444-.26.26-.446.705-.446 1.002 0 .297 1.227 1.744 2.714 3.265l2.676 2.709Z" fill="#8F42DB"/><path d="M38.29 20.009c-4.164 4.155-5.39 5.64-5.39 5.936 0 .334.185.817.445 1.113.26.297.707.483 1.004.446.335-.037 2.156-1.633 4.015-3.488 1.896-1.892 3.457-3.71 3.457-4.007 0-.297-1.561-2.115-3.42-3.97-1.896-1.893-3.717-3.45-4.015-3.45-.297 0-.78.185-1.04.444-.26.26-.447.705-.447 1.002 0 .297 1.227 1.744 2.714 3.265l2.677 2.709Z" fill="#8F42DB"/></svg>
        <p className='text-neutral-50'> Scroll to view more </p>
      </div>
    </section>
  );
};
