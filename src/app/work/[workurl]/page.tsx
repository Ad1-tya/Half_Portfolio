'use client';

import { Suspense, useState } from 'react';
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
    <Suspense fallback={<Loading />}>
      {loading && <Loading />}
      <section className="h-screen w-screen overflow-hidden bg-neutral-950">
        <iframe
          className={`h-[108vh] w-full sm:hidden ${loading ? 'hidden' : ''}`}
          src={iframeSrcMob}
          onLoad={handleLoad}
          allowFullScreen
        ></iframe>
        <iframe
          className={`h-[108vh] w-full sm:hidden ${loading ? 'hidden' : ''}`}
          src={iframeSrc}
          onLoad={handleLoad}
          allowFullScreen
        ></iframe>
        <iframe
          className={`hidden h-[108vh] w-full sm:block xl:hidden ${loading ? 'hidden' : ''}`}
          src={iframeSrcMed}
          onLoad={handleLoad}
          allowFullScreen
        />
      </section>
    </Suspense>
  );
}
