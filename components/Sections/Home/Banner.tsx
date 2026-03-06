'use client';
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="home-banner-section min-h-screen pt-40 pb-6">
      <div className="ag__container flex flex-col justify-between">
        <div className="banner-top relative w-full">
          <div className="title-block flex flex-col items-end gap-2 text-right uppercase">
            <h1>
              Your strategic partner <br />
              in the intelligence <br />
              Economy
            </h1>
            <span className="text-muted font-sm rounded-[3.75rem] bg-[#F3F2F2]/50 px-4 py-2 leading-[normal] uppercase">
              AI • Commerce • CX • Platforms • Media
            </span>
          </div>
          <div className="banner-content absolute bottom-0 z-2 flex max-w-75 flex-col items-start gap-8">
            <p>
              We fuse artificial intelligence, digital innovation, commerce, and creative tech to
              accelerate measurable growth.
            </p>
            <Button text="Get in Touch" href="#" />
          </div>
        </div>
        <div className="banner-bottom Replace flex w-full items-end justify-between gap-6">
          <div className="w-2/7">
            <div className="page-video-block pointer-none relative max-w-67 overflow-hidden rounded-lg">
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
                className="absolute top-0 left-0 h-full w-full opacity-10 mix-blend-hard-light"
                alt="Counteravenue"
                width={268}
                height={150}
                priority={true}
              />
            </div>
          </div>
          <div className="w-3/7">
            <div className="page-video-block pointer-none mx-auto max-w-160 mix-blend-darken">
              <video
                className="pointer-none mx-auto h-[37.5vh] object-cover"
                src="/video/logo-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          <div className="w-2/7 text-right">
            <span className="block pb-4 text-xs leading-[normal] uppercase">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
