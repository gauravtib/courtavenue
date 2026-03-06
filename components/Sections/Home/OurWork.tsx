'use client';

export default function OurWork() {
  return (
    <section className="home-our-work-section pt-40">
      <div className="ag__container flex flex-col">
        <div className="title-block mx-auto mb-14 flex max-w-100 flex-col items-center gap-4 text-center">
          <h2>Our Work</h2>
          <p>Trusted by top brands across automotive, retail, technology and CPG.</p>
        </div>
      </div>
      <div className="slider-block flex h-screen">
        <div className="slider-item relative flex w-full flex-col overflow-hidden">
          <div className="ag__container relative z-2 flex h-full w-full flex-col justify-between py-10 text-white">
            <div className="flex flex-col gap-2">
              <h3>Kia</h3>
              <p>Reinventing car buying.</p>
            </div>
            <div className="l-auto flex max-w-80 flex-col gap-2">
              <span className="title">what we do</span>
              <p>Kia digital car buying experience interface redesign across mobile and desktop</p>
            </div>
          </div>
          <div className="page-video-block pointer-none absolute top-0 left-0 h-full w-full overflow-hidden">
            <video
              className="pointer-none w-full object-cover"
              src="/video/kia.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
