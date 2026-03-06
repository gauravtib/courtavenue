"use client";
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="home-banner-section pt-40 pb-6 min-h-screen">
      <div className='ag__container flex flex-col justify-between'>
        <div className="banner-top w-full relative">
          <div className="title-block uppercase text-right flex flex-col items-end gap-2">
            <h1>Your strategic partner <br />in the intelligence <br />Economy</h1>
            <span className='text-muted font-sm leading-[normal] py-2 px-4 rounded-[3.75rem] bg-[#F3F2F2]/50 uppercase'>AI • Commerce • CX • Platforms • Media</span>
          </div>
          <div className="banner-content max-w-75 flex flex-col gap-8 items-start absolute bottom-0 z-2">
            <p>We fuse artificial intelligence, digital innovation, commerce, and creative tech to accelerate measurable growth.</p>
            <Button text="Get in Touch" href="#" />
          </div>
        </div>
        <div className="banner-bottom w-full flex items-end justify-between gap-6">
          <div className="w-2/7">
            <div className="page-video-block pointer-none max-w-67 rounded-lg overflow-hidden relative">
              <video
                className="pointer-none w-full object-cover"
                src="/video/kia.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <Image
                src="/images/doted.gif"
                className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-hard-light"
                alt="Counteravenue"
                width={268}
                height={150}
                priority={true}
              />
            </div>
          </div>
          <div className="w-3/7">
            <div className="page-video-block pointer-none max-w-160 mx-auto mix-blend-darken">
              <video
                className="pointer-none h-[37.5vh] mx-auto object-cover"
                src="/video/logo-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          <div className="w-2/7 text-right">
            <span className='text-xs leading-[normal] uppercase pb-4 block'>Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
