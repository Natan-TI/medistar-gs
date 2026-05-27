import './index.css';

import { ArchitectureSection } from './sections/ArchitectureSection';
import { DashboardSection } from './sections/DashboardSection';
import { HeroSection } from './sections/HeroSection';
import { IdentitySection } from './sections/IdentitySection';
import { OdsSection } from './sections/OdsSection';
import { ProblemSection } from './sections/ProblemSection';
import { TeamSection } from './sections/TeamSection';

function App() {
  return (
    <main className="app">
      <HeroSection />
      <IdentitySection />
      <ProblemSection />
      <OdsSection />
      <DashboardSection />
      <ArchitectureSection />
      <TeamSection />
    </main>
  );
}

export default App;