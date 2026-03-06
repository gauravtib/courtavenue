'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NavLinks } from '@/components/Navbar';
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
      <header className="site-header border-grey-light fixed z-99 w-full border-b py-8 transition-all duration-300 ease-in-out">
        <div className="ag__container flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              className="relative z-30"
              alt="Velocity"
              width={201}
              height={31}
              priority={true}
            />
          </Link>
          <div className="menu-toggle lending-[normal] flex items-center gap-2 text-sm uppercase">
            <span>Menu</span>
            <div
              aria-label="Courtavenue"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`nav__humburger relative z-30 flex h-10 min-w-10 cursor-pointer items-center justify-center ${isOpen ? 'open' : ''} `}
            >
              <span />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
