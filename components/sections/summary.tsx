"use client";

import { Eye, Rocket } from "lucide-react";
import { Tag } from "../ui/tag";

export function Summary() {
  return (
    <section id="summary" className="py-padding-y-page">
      <div className="container-section py-padding-y-page bg-white/5 rounded-lg">
        <div className="w-full max-w-3xl mx-auto"><Tag text="OUR STORY" />

          {/* Title */}
          <h1 className="text-heading-1 mb-5 mt-8">
            How Nuelit <span className="emphasis">came to life</span>
          </h1>

          {/* Story Description */}
          <div className="space-y-6 text-body">
            <p>
              Founded by a recruiter with years of direct hiring experience across technology, healthcare, manufacturing, banking and finance, and non-technical roles. Having screened thousands of resumes and worked closely with hiring managers, we understand why some candidates move forward and others do not — and brings that insight directly into every resume, LinkedIn profile, and coaching session.
            </p>
            <p>
              We support professionals at all stages of their careers — from early-career candidates preparing their first professional resume to experienced professionals and leaders repositioning themselves for new opportunities.
            </p>
            <p>
              Every engagement is personal and specific. We do not use templates or generic wording. Each document and coaching plan is built around the client&apos;s background, career direction, and the requirements of their target roles.
            </p>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mt-10 md:mt-15 lg:mt-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white font-medium tracking-wider text-sm">
                <Eye className="w-5 h-5 text-white" />
                VISION
              </div>
              <p className="text-body">
                To bridge the gap between talents and their career aspirations through our expertise
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white font-medium tracking-wider text-sm">
                <Rocket className="w-5 h-5 text-white" />
                MISSION
              </div>
              <p className="text-body">
                To provide recruiter-backed career services that empower talents at all levels to navigate the hiring process with confidence and clarity.
              </p>
            </div>
          </div></div>

      </div>
    </section>
  );
}
