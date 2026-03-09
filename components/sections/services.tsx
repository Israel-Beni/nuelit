import { Tag } from "@/components/ui/tag";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MyCldImage } from "../utils/my-cld-image";

export function Services() {
  return (
    <section id="services" className="py-padding-y-page">
      <div className="container-section py-padding-y-page bg-white/5 rounded-lg">
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center gap-4 md:gap-5">
          <Tag text="Our" />
          <h2 className="text-heading-2">
            Services
          </h2>
          <p className="text-subtitle max-w-xl mx-auto leading-relaxed">
            Everything you need to land your next role, we got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group p-6 md:p-8 rounded-xl glass relative overflow-hidden h-fit md:h-90 flex flex-col justify-between last:md:col-span-full last:lg:col-span-1"
            >
              <MyCldImage src="multi-circles_ltgxop" alt={"Abstract multi circles as background pattern"} width={200} height={200}
                className="absolute -bottom-1/3 left-0 w-full z-0 invert-35 opacity-20 md:opacity-100 group-hover:scale-110 transition-slow" />

              <div className="relative z-10">
                <span className="text-lg md:text-xl font-serif italic text-white/20 block mb-2 md:mb-2.5 group-hover:text-primary/50">
                  {service.id}
                </span>
                <h3 className="text-base md:text-body !text-white font-medium mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="relative z-10 text-sm md:text-body leading-relaxed text-white/50">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <Link href="/contact" className="relative block z-10 mt-12 md:mt-20 w-fit mx-auto px-4">
          <Button variant="primary">
            Contact Us
          </Button>
        </Link>
      </div>
    </section >
  );
}


const SERVICES = [
  { id: '01', title: 'Resume', desc: 'Stand out to recruiters, be it for an Entry, Pro, or Executive level role.' },
  { id: '02', title: 'Scholarship CV', desc: 'Stand out to committees with an academic-focused CV.' },
  { id: '03', title: 'Cover Letter', desc: 'A compelling narrative that opens doors to interviews.' },
  { id: '04', title: 'Career Coaching', desc: 'Strategic guidance to navigate your career with confidence.' },
  { id: '05', title: 'LinkedIn Optimization', desc: 'A LinkedIn profile that gets you noticed by recruiters.' },
  { id: '06', title: 'Interview Preparation', desc: 'Master your pitch with 60 minutes of expert coaching.' },
  { id: '07', title: 'Website Development', desc: 'Get your personal website. An online presence through a personal website is key for legitimacy.' },
];
