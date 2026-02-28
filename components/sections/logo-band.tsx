import { CLIENTS } from "@/lib/constants";
import Image from "next/image";
import { MyCldImage } from "../utils/my-cld-image";

export function LogoBand() {
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="logo-band" className="py-25 overflow-hidden">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <p className="text-subtitle max-w-1/5 text-center lg:text-left leading-relaxed shrink-0">
            Companies our clients have landed jobs:
          </p>

          <div className="flex-1 relative overflow-hidden mask-marquee">
            <div className="flex items-center gap-12 md:gap-20 w-max animate-marquee py-4">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-500"
                >
                  <MyCldImage
                    src={client.id}
                    alt={client.name + " Logo"}
                    width={260}
                    height={90}
                    crop="fit"
                    gravity="center"
                    className="h-8 md:h-12 w-auto object-contain grayscale brightness-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

