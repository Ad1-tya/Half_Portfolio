'use client';

import { useState } from 'react';
import Loading from '@/app/loading';
import { WorkData } from '@/data';

type Props = {
  params: {
    workurl: string;
  };
};

export default function Portfolio({ params }: Props) {
  const [loading, setLoading] = useState(true);
  const workItem = WorkData.find((item) => item.id === parseInt(params.workurl));

  const iframeSrc = workItem?.workurl ? workItem.workurl : 'about:blank';
  const iframeSrcMob = workItem?.workurlmob ? workItem.workurlmob : 'about:blank';
  const iframeSrcMed = workItem?.workurlmed ? workItem.workurlmed : 'about:blank';

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <>
      {loading && <Loading />}
      <section className="h-screen w-screen overflow-hidden bg-neutral-950">
        <iframe
          className="h-[108vh] w-full sm:hidden"
          onLoad={handleLoad}
          src={iframeSrcMob}
          allowFullScreen
        ></iframe>
        <iframe
          className="hidden h-[108vh] w-full xl:block"
          src={iframeSrc}
          onLoad={handleLoad}
          allowFullScreen
        ></iframe>
        <iframe
          className="hidden h-[108vh] w-full sm:block xl:hidden"
          src={iframeSrcMed}
          onLoad={handleLoad}
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
