import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { HowItWorks } from '@/components/sections/how-it-works';
import { System } from '@/components/sections/system';
import { Workflows } from '@/components/sections/workflows';
import { Pilot } from '@/components/sections/pilot';
import { Impact } from '@/components/sections/impact';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <System />
      <Workflows />
      <Pilot />
      <Impact />
      <About />
      <Contact />
    </>
  );
}
