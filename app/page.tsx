import { Hero } from '@/components/sections/hero';
import { WhoWeHelp } from '@/components/sections/who-we-help';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Services } from '@/components/sections/services';
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
      <WhoWeHelp />
      <Problem />
      <Solution />
      <Services />
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
