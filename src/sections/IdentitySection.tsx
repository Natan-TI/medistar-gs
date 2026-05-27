import { InfoCard } from '../components/InfoCard';

export function IdentitySection() {
  return (
    <section id="identity" className="section identity-section">
      <span className="tag">Identidade do produto</span>

      <h2>Uma solução para tornar a telemedicina mais contextualizada, justa e eficiente.</h2>

      <div className="info-grid">
        <InfoCard
          title="Nome"
          description="Medistar"
        />

        <InfoCard
          title="Propósito"
          description="Apoiar a triagem médica remota em regiões isoladas, considerando não apenas os dados clínicos, mas também o contexto espacial, climático e de conectividade do paciente."
        />

        <InfoCard
          title="Contexto"
          description="A solução simula uma camada inteligente que poderia ser integrada a plataformas de telemedicina já existentes."
        />
      </div>
    </section>
  );
}