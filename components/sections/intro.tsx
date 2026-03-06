import Image from 'next/image';
import { Tag } from '../ui/tag';
import { Badge } from '../ui/badge';
import { MyCldImage } from '../utils/my-cld-image';

export function Intro() {
  return (
    <section className="py-25 bg-black/20">
      <div className="container-section flex flex-col lg:flex-row gap-16">

        {/* Left Col - Text & Intro */}
        <div className="flex-1 max-w-[35%]">
          <Tag text="Introducing Nuelit" className="mb-8" />

          <h2 className="text-heading-2 mb-12">
            Resume written by
            <span className="emphasis"> human experts</span>
          </h2>

          <div className="flex items-center gap-6 mb-12">
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
            <div className="text-body uppercase  uppercase text-white/30 ">
              Start your journey today and land your next job
            </div>
          </div>

          <p className="text-body-sm font-medium">
            Get help from actual human recruiting experts with 10+ years in the field.
          </p>
        </div>

        {/* Right Col - Bento Grid Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:max-h-140">

          {/* Card 1 - Text focus */}
          <div className="md:col-span-1 md:row-span-2 p-5 rounded-lg glass border border-white/5 bg-white/[0.02] flex flex-col justify-between">
            <div>
              <Badge variant="glass" text="Growth" className="mb-4 overflow-hidden" />
              <h3 className="text-heading-5 !text-white mb-4">
                Personal branding
                that gets you
                noticed by
                recruiters.
              </h3>
            </div>
            <div className="space-y-2 pt-8">
              <div className="h-2 w-12 bg-white/5 rounded-full" />
              <div className="h-2 w-24 bg-white/5 rounded-full" />
              <div className="h-2 w-32 bg-white/10 rounded-full" />
              <div className="h-2 w-full bg-white/50 rounded-full" />
            </div>
          </div>

          {/* Card 2 - Main Expert Image */}
          <div className="md:col-span-2 md:row-span-3  relative rounded-lg overflow-hidden group">
            <Image
              src="/portrait_expert_woman.png"
              alt="Expert Career Coach"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Card 3 - Small Meeting Image */}
          <div className="md:row-span-1 md:col-span-1  relative rounded-lg overflow-hidden aspect-[4/3]">
            <MyCldImage src="e6zQfDM2FrZjk0CuXsVLJAIFEJw_rxtz4k" alt="Strategizing with a career coach" fill className="object-cover aspect-scare" />
          </div>

        </div>
      </div>
    </section>
  );
}
