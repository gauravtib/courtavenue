import { Header, Footer } from './PageWrapper';

export default async function PagesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="page-video-block pointer-none fixed top-0 left-0 -z-1 h-screen w-screen opacity-40 mix-blend-multiply">
          <video
            className="pointer-none w-full object-cover"
            src="/video/page-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="main-wrapper flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
