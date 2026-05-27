import './index.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { DashboardSection } from './sections/DashboardSection';
import { HeroSection } from './sections/HeroSection';
import { IdentitySection } from './sections/IdentitySection';
import { OdsSection } from './sections/OdsSection';
import { ProblemSection } from './sections/ProblemSection';
import { TeamSection } from './sections/TeamSection';

function App() {
  return (
    <>
      <div className="space-background">
        <div className="stars" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </div>

      <Header />

      <main className="app">
        <HeroSection />
        <IdentitySection />
        <ProblemSection />
        <OdsSection />
        <DashboardSection />
        <ArchitectureSection />
        <TeamSection />
      </main>

      <Footer />
    </>
  );
}

export default App;