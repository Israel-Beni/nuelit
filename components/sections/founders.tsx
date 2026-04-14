import { Tag } from "@/components/ui/tag";
import { MyCldImage } from "@/components/ui/my-cld-image";
import { FOUNDERS } from "@/lib/constants";
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Globe, Mail } from 'lucide-react';


export function Founders() {
  return (
    <section id="founders" className="py-padding-y-page">
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
          <div className="flex flex-col gap-4 md:gap-5">
            <Tag text="TEAM" />
            <h2 className="text-heading-2">
              The <span className="font-playfair-display italic text-white/50">Team</span>
            </h2>
          </div>
          <p className="text-subtitle max-w-xs md:text-right leading-relaxed text-white/40">
            DISCOVER THE EXCEPTIONAL PEOPLE BEHIND NUELIT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full m-auto max-w-100 md:max-w-9/10 lg:max-w-8/10">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className="relative aspect-square overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <MyCldImage
                  src={founder.imageUid}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-3 mx-3 lg:bottom-6 lg:mx-6  bg-white p-3 md:p-4 rounded-lg max-w-[calc(100%-3rem)] md:max-w-xs min-w-5/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex gap-4 justify-between items-center">
                  <h3 className="text-heading-6 font-bold text-black mb-1">
                    {founder.name}
                  </h3>

                  <div className="flex gap-2">
                    {founder?.linkedIn && (
                      <Link href={founder.linkedIn} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mb-1.5 stroke-1 stroke-background fill-background" />
                      </Link>
                    )}
                    {founder?.website && (
                      <Link href={founder.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4 mb-0.5 fill-background" />
                      </Link>
                    )}
                    {founder?.instagram && (
                      <Link href={founder.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 fill-background" />
                      </Link>
                    )}
                    {founder?.twitter && (
                      <Link href={founder.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4 fill-background" />
                      </Link>
                    )}
                    {founder?.email && (
                      <Link href={`mailto:${founder.email}`} target="_blank" rel="noopener noreferrer">
                        <Mail className="w-4 h-4 fill-background" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm md:text-base text-black/60 font-medium">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
