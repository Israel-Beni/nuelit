import Image from 'next/image';
import { Tag } from '../ui/tag';
import { Badge } from '../ui/badge';
import { MyCldImage } from '../utils/my-cld-image';

export function Intro() {
  return (
    <section className="py-16 md:py-25 bg-black/20">
      <div className="container-section flex flex-col lg:flex-row gap-12 md:gap-16">

        {/* Left Col - Text & Intro */}
        <div className="flex-1 lg:max-w-[35%]">
          <div className="flex justify-center lg:justify-start">
            <Tag text="Introducing Nuelit" className="mb-3 md:mb-5 md:mb-8" />
          </div>

          <h2 className="text-heading-2 mb-8 md:mb-12 text-center lg:text-left">
            Resume written by
            <span className="emphasis"> human experts</span>
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-5 mb-12">
            <div className="flex -space-x-3 grayscale opacity-80">
              {[1].map((i) => (
                <div key={i} className="w-24 h-12 rounded-lg border-2 border-background overflow-hidden glass relative">
                  <Image
                    src="/avatars_experts.png"
                    alt="Expert Avatars"
                    fill
                    className="object-cover object-top scale-150"
                  />
                </div>
              ))}
            </div>
            <div className="text-body uppercase text-white/30 text-center md:text-left max-w-xs">
              Start your journey today and land your next job
            </div>
          </div>

          <p className="text-body-sm font-medium text-center lg:text-left">
            Get help from actual human recruiting experts with 10+ years in the field.
          </p>
        </div>

        {/* Right Col - Bento Grid Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-2 md:gap-4 md:max-h-140">

          {/* Card 1 - Text focus */}
          <div className="row-span-1 md:col-span-1 md:row-span-1 p-5 rounded-lg glass overflow-hidden border border-white/5 bg-white/[0.02] flex flex-col justify-between">
            <div>
              <Badge variant="glass" text="Growth" className="mb-2 md:mb-4 overflow-hidden" />
              <h3 className="text-heading-5 !text-white mb-2">
                Gets noticed by recruiters.
              </h3>
            </div>
            <div className="space-y-2 pt-2 md:pt-8">
              <div className="h-2 w-12 bg-white/5 rounded-full" />
              <div className="h-2 w-24 bg-white/5 rounded-full" />
              <div className="h-2 w-32 bg-white/10 rounded-full" />
              <div className="h-2 w-full bg-white/50 rounded-full" />
            </div>
          </div>

          {/* Card 2 - Main Expert Image */}
          <div className="md:col-span-2 row-span-2 md:row-span-2  relative rounded-lg overflow-hidden group">
            <Image
              src="/portrait_expert_woman.png"
              alt="Expert Career Coach"
              fill
              className="md:aspect-auto w-full object-cover transition-slow group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Card 3 - Small Meeting Image */}
          <div className="row-span-2 md:row-span-1 md:col-span-1  relative rounded-lg overflow-hidden flex items-center justify-center group">
            <MyCldImage src="e6zQfDM2FrZjk0CuXsVLJAIFEJw_rxtz4k" alt="Strategizing with a career coach" fill className="object-cover transition-slow group-hover:scale-110" />
          </div>

        </div>
      </div>
    </section>
  );
}
