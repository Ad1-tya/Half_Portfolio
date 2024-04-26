'use client';

import { useState, useEffect } from 'react';
import Loading from '@/app/loading';
import { WorkData } from '@/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    workurl: string;
  };
};

export default function Portfolio({ params }: Props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const workItem = WorkData.find((item) => item.id === parseInt(params.workurl));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
        if (workItem?.workurlmed) {
          router.push(workItem.workurlmed);
        } else if (workItem?.workurlmob) {
          router.push(workItem.workurlmob);
        } else {
          setLoading(false);
        }
      } else if (workItem?.workurl) {
        router.push(workItem.workurl);
      } else {
        setLoading(false);
      }
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, [workItem]);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <>
      {loading && <Loading />}
    </>
  );
}
