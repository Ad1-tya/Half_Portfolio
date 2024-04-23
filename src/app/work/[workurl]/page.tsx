'use client';

import { WorkData } from '@/data';

type Props = {
  params: {
    workurl: string;
  };
};

export default function Portfolio({ params }: Props) {
  const workItem = WorkData.find((item) => item.id === parseInt(params.workurl));

  const iframeSrc = workItem?.workurl ? workItem.workurl : 'about:blank';
  const iframeSrcMob = workItem?.workurlmob ? workItem.workurlmob : 'about:blank';
  const iframeSrcMed = workItem?.workurlmed ? workItem.workurlmed : 'about:blank';

  return (
    <section className="h-screen w-screen overflow-hidden bg-neutral-950">
      <iframe className="h-[108vh] w-full sm:hidden" src={iframeSrcMob} allowFullScreen></iframe>
      <iframe className="hidden h-[108vh] w-full xl:block" src={iframeSrc} allowFullScreen></iframe>
      <iframe
        className="hidden h-[108vh] w-full sm:block xl:hidden"
        src={iframeSrcMed}
        allowFullScreen
      ></iframe>
    </section>
  );
}
