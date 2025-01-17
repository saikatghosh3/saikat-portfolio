import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Portfolio } from '../components/sections/Portfolio';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';
import { CVDownload } from '../components/sections/CVDownload';

export const Home = () => {
  return (
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <CVDownload />
      <Contact />
    </main>
  );
};