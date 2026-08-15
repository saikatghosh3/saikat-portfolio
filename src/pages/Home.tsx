import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Portfolio } from '../components/sections/Portfolio';
import { FrontendDesign } from '../components/sections/FrontendDesign';
import { Experience } from '../components/sections/Experience';
import { Certifications } from '../components/sections/Certifications';
import { Contact } from '../components/sections/Contact';
import { CVDownload } from '../components/sections/CVDownload';

export const Home = () => {
  return (
    <main>
      <About />
      <Skills />
      <Portfolio />
      <FrontendDesign />
      <Experience />
      <Certifications preview />
      <CVDownload />
      <Contact />
    </main>
  );
};