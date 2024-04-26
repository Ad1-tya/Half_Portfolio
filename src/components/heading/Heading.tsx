import { ReactElement } from 'react';

type Props = {
  title: string;
};
export const Heading = ({ title }: Props): ReactElement => {
  return (
    <div className={`relative ${title=="Experience"? `items-center px-2` : `flex-start pr-2 sm:items-center sm:px-2`} flex w-max flex-col self-center sm:self-stretch`}>
      <hr className="undEff absolute top-[10px] sm:top-[14px]" />
      <h2>{title}</h2>
      <hr className="undEff absolute top-[39px] sm:top-[54px]" />
    </div>
  );
};
