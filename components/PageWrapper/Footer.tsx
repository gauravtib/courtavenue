'use client';
import Image from 'next/image';
import Link from 'next/link';
import { quickLink, companiesLink, contactLink, socialLink } from '@/data';

export default function Footer() {
  return (
    <>
      <footer className="site-footer border-grey-light mt-auto overflow-hidden border-t pt-20">
        <div className="ag__container">
          <div className="footer-top mb-8 flex justify-between">
            <div className="footer-top-left flex flex-col justify-between gap-6">
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
              <p>© {new Date().getFullYear()} CourtAvenue. All rights reserved.</p>
            </div>
            <div className="footer-top-right flex gap-6">
              <div className="col-1 min-w-35.5">
                <span className="mb-8 block">Quick Link</span>
                <ul className="menu flex flex-col gap-2 text-black">
                  {quickLink.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link
                        className="hover:text-theme transition-all duration-300 ease-in-out"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-2 min-w-50">
                <span className="mb-8 block">CourtAvenue Companies</span>
                <ul className="menu flex flex-col gap-2 text-black">
                  {companiesLink.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link
                        className="hover:text-theme transition-all duration-300 ease-in-out"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-3 min-w-37.5">
                <span className="mb-8 block">Contact</span>
                <ul className="menu flex flex-col gap-2 text-black">
                  {contactLink.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link
                        className="hover:text-theme transition-all duration-300 ease-in-out"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4 min-w-37.5">
                <span className="mb-8 block">Social</span>
                <ul className="menu flex flex-col gap-2 text-black">
                  {socialLink.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link
                        className="hover:text-theme transition-all duration-300 ease-in-out"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="page-video-block pointer-none mx-auto max-w-125 mix-blend-darken">
            <video
              className="pointer-none w-full object-cover"
              src="/video/logo-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </footer>
    </>
  );
}
