import { Button } from '@/components/ui/button';
import Video from 'next-video';
import { Tag } from '../ui/tag';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero-section-home" className="relative py-25 flex items-center overflow-hidden">
      <div className="container-section h-fit relative flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Media  */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative size-full flex items-center justify-center overflow-hidden">
            <Video
              src="https://stream.mux.com/KFEU2lNxPw34yhikzo4U12wuC9U01mIpe6ST01BASCJ600.m3u8"
              className="!w-auto h-full ml-25"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="https://image.mux.com/KFEU2lNxPw34yhikzo4U12wuC9U01mIpe6ST01BASCJ600/thumbnail.png?width=214&height=121&time=4"
            />
            <div className="absolute top-0 left-0 size-full [background:linear-gradient(90deg,rgba(17,18,19,1)_40%,rgba(17,18,19,0)_75%,rgba(17,18,19,0)_80%_80%,rgba(17,18,19,1)_100%),linear-gradient(0deg,rgba(17,18,19,1)_0%,rgba(17,18,19,0)_10%,rgba(17,18,19,0)_90%,rgba(17,18,19,1)_100%)]" />
            <div className="absolute top-0 right-0 w-3/4 h-full [background:radial-gradient(ellipse_at_center,rgba(17,18,19,0)_10%_20%,rgba(17,18,19,1)_100%)]" />
          </div>
        </div>

        {/* Left Content */}
        <div className="relative text-center lg:text-left flex flex-col justify-center gap-5 md:max-w-[48%] h-screen max-h-[calc(70vh-(var(--height-header)+var(--vertical-offset-header)))]">
          <Tag text="Welcome to Nuelit" className='bg-background/70' />

          <h1 className="text-heading-1 mt-5">
            Making you <br />
            <span className="emphasis">irresistible</span> to <br />
            Hiring Managers
          </h1>

          <p className="text-subtitle mt-8">
            Become the candidate all recruiters want to hire
          </p>

          <Link href="/pricing">
            <Button variant="primary" className="mt-8">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
