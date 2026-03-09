import { Button } from '@/components/ui/button';
import Video from 'next-video';
import { Tag } from '../ui/tag';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero-section-home" className="relative py-padding-y-page flex items-center overflow-hidden">
      <div className="container-section h-fit relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Media  */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="relative size-full flex items-center justify-center overflow-hidden">
            <Video
              src="https://stream.mux.com/KFEU2lNxPw34yhikzo4U12wuC9U01mIpe6ST01BASCJ600.m3u8"
              className="!w-auto h-full lg:ml-25 opacity-40 lg:opacity-100"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="https://image.mux.com/KFEU2lNxPw34yhikzo4U12wuC9U01mIpe6ST01BASCJ600/thumbnail.png?width=214&height=121&time=4"
            />
            <div className="absolute top-0 left-0 size-full [background:linear-gradient(90deg,rgba(17,18,19,1)_0%,rgba(17,18,19,0)_50%,rgba(17,18,19,1)_100%),linear-gradient(0deg,rgba(17,18,19,1)_0%,rgba(17,18,19,0)_20%,rgba(17,18,19,0)_80%,rgba(17,18,19,1)_100%)] lg:[background:linear-gradient(90deg,rgba(17,18,19,1)_40%,rgba(17,18,19,0)_75%,rgba(17,18,19,0)_80%_80%,rgba(17,18,19,1)_100%),linear-gradient(0deg,rgba(17,18,19,1)_0%,rgba(17,18,19,0)_10%,rgba(17,18,19,0)_90%,rgba(17,18,19,1)_100%)]" />
            <div className="hidden lg:block absolute top-0 right-0 lg:w-3/4 h-full [background:radial-gradient(ellipse_at_center,rgba(17,18,19,0)_10%_20%,rgba(17,18,19,1)_100%)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-center lg:text-left flex flex-col justify-center max-w-3/4 lg:max-w-[48%] py-padding-y-page">
          <div className="flex justify-center lg:justify-start">
            <Tag text="Welcome to Nuelit" className='bg-background/70' />
          </div>

          <h1 className="text-heading-1 mt-5 leading-tight">
            Making you
            <span className="emphasis"> irresistible </span>
            to <br className="hidden lg:block" /> Hiring Managers
          </h1>

          <p className="text-body mt-4 md:mt-8 opacity-80">
            Become the candidate all recruiters want to hire
          </p>

          <Link href="/pricing" className="mt-6 md:mt-8">
            <Button variant="primary">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
