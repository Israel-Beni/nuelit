import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="relative">
        <h1 className="text-[12rem] md:text-[18rem] font-medium leading-none opacity-5 selection:bg-transparent pointer-events-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-heading-1 mb-4 italic font-playfair-display">
            Lost in <span className="text-white/40">Transit</span>
          </h2>
          <p className="text-body max-w-md mx-auto mb-10">
            The professional breakthrough you're seeking isn't on this page. 
            It seems you've taken a detour into uncharted territory.
          </p>
          <Link href="/">
            <Button variant="primary">
              Navigate Home
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}
