import { Tag } from '../ui/tag';

export function ContactHeader() {
  return (
    <div className="flex flex-col items-center text-center pt-25 pb-20">
      <Tag text="LET'S TALK" />

      <h1 className="text-heading-1 mb-8 mt-5">
        Contact <span className="emphasis">us</span>
      </h1>

      <p className="text-subtitle">
        QUESTIONS, IDEAS, OR JUST SAYING HI
      </p>
    </div>
  );
}
