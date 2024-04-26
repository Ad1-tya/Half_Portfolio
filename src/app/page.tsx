import { Navbar } from '@/components/navbar';
import { Achievements, Education, Experience, Explore, Footer, Hero, Skills } from '@/features/home';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-neutral-950 pt-8 sm:pt-0">
      <Navbar />
      <Hero />
      <Explore />
      <Education />
      <Experience />
      <Achievements />
      <Skills />
      <Footer />
    </div>
  );
}
