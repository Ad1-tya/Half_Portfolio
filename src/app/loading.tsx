import React from 'react';
import { Spinner } from '@/components/Spinner';

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-950">
      <Spinner size="sm" />
    </div>
  );
};

export default Loading;
