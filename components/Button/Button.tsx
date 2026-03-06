"use client";

import Link from "next/link";

type buttonProps = {
  text: string;
  href?: string;
  customClass?: string;
  theme?: "outline" | "fill";
};

const themeClasses: Record<NonNullable<buttonProps["theme"]>, string> = {
  outline: "bg-transperant text-black hover:bg-black hover:text-white border-black",
  fill: "bg-black text-white hover:bg-white hover:text-black border-black",
};

export default function Button({
  text,
  href = "#",
  customClass,
  theme = "outline",
}: buttonProps) {
  return (
    <Link
      href={href}
      className={`
        btn group inline-flex items-center rounded-[3.75rem] border border-solid justify-center px-6.25 py-2.75 transition-all duration-300 ease-linear
        ${themeClasses[theme]}
        ${customClass ?? ""}
      `}
    >
      <span className="font-medium font-dm uppercase text-sm leading-[normal]">{text}</span>
    </Link>
  );
}
