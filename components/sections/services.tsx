import { Tag } from "@/components/ui/tag";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MyCldImage } from "../utils/my-cld-image";

export function Services() {
  return (
    <section id="services" className="py-25">
      <div className="container-section py-25 bg-white/5">
        <div className="text-center mb-20 flex flex-col items-center gap-5">
          <Tag text="Our" />
          <h2 className="text-heading-2">
            Services
          </h2>
          <p className="text-subtitle max-w-md mx-auto leading-relaxed">
            Everything you need to land your next role, <br /> we got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group p-5 rounded-lg glass relative overflow-hidden h-90 flex flex-col justify-between last:col-span-full"
            >
              <MyCldImage src="multi-circles_ltgxop" alt={"Abstract multi circles as background pattern"} width={200} height={200}
                className="absolute -bottom-1/3 left-0 w-full z-0 invert-35" />

              <div className="relative z-10">
                <span className="text-lg font-serif italic text-white/20 block mb-2.5">
                  {service.id}
                </span>
                <h3 className="text-body !text-white/70 font-medium mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="relative z-10 text-body">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <Link href="/contact" className="relative block z-10 mt-20 w-fit mx-auto">
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
