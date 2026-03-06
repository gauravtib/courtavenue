"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { NavLinks } from "@/components/Navbar";
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <header className="site-header fixed z-99 w-full transition-all duration-300 ease-in-out py-8 border-b border-grey-light">
        <div className='ag__container flex items-center justify-between'>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              className="z-30 relative"
              alt="Velocity"
              width={201}
              height={31}
              priority={true}
            />
          </Link>
          <div className="menu-toggle uppercase flex items-center gap-2 text-sm lending-[normal]">
            <span>Menu</span>
            <div
              aria-label="Courtavenue"
              onClick={() => setIsOpen(prev => !prev)}
              className={`nav__humburger flex items-center justify-center min-w-10 h-10 relative cursor-pointer z-30
                ${isOpen ? 'open' : ''}
              `}
            >
              <span />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
