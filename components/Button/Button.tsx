'use client';

import Link from 'next/link';

type buttonProps = {
  text: string;
  href?: string;
  customClass?: string;
  theme?: 'outline' | 'fill';
};

const themeClasses: Record<NonNullable<buttonProps['theme']>, string> = {
  outline: 'bg-transperant text-black hover:bg-black hover:text-white border-black',
  fill: 'bg-black text-white hover:bg-white hover:text-black border-black',
};

export default function Button({ text, href = '#', customClass, theme = 'outline' }: buttonProps) {
  return (
    <Link
      href={href}
      className={`btn group inline-flex items-center justify-center rounded-[3.75rem] border border-solid px-6.25 py-2.75 transition-all duration-300 ease-linear ${themeClasses[theme]} ${customClass ?? ''} `}
    >
      <span className="font-dm text-sm leading-[normal] font-medium uppercase">{text}</span>
    </Link>
  );
}
