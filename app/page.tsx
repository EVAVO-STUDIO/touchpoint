import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Pilot } from '@/components/sections/pilot';
import { Impact } from '@/components/sections/impact';
import { DataLayer } from '@/components/sections/data-layer';
import { UseCases } from '@/components/sections/use-cases';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pilot />
      <Impact />
      <DataLayer />
      <UseCases />
      <About />
      <Contact />
    </>
  );
}
