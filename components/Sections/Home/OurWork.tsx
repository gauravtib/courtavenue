"use client";

export default function OurWork() {
  return (
    <section className="home-our-work-section pt-40">
      <div className='ag__container flex flex-col'>
        <div className="title-block flex flex-col items-center text-center gap-4 mb-14 max-w-100 mx-auto">
          <h2>Our Work</h2>
          <p>Trusted by top brands across automotive, retail, technology and CPG.</p>
        </div>
      </div>
      <div className="slider-block h-screen flex">
        <div className="slider-item relative flex flex-col w-full overflow-hidden">
          <div className="ag__container text-white flex flex-col justify-between w-full h-full relative z-2 py-10">
            <div className="flex flex-col gap-2">
              <h3>Kia</h3>
              <p>Reinventing car buying.</p>
            </div>
            <div className="max-w-80 ml-auto flex flex-col gap-2">
              <span className='title'>what we do</span>
              <p>Kia digital car buying experience interface redesign across mobile and desktop</p>
            </div>
          </div>
          <div className="page-video-block pointer-none  overflow-hidden absolute top-0 left-0 w-full h-full">
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
