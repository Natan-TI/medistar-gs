import { InfoCard } from '../components/InfoCard';

export function IdentitySection() {
  return (
    <section id="identity" className="section identity-section">
      <div className="identity-layout">

        <div className="identity-content">
          <span className="tag">Identidade do produto</span>

          <h2>Uma solução para tornar a telemedicina mais contextualizada, justa e eficiente.</h2>

          <div className="identity-card-list">
            <InfoCard
              title="Nome"
              description="Medistar — plataforma de inteligência espacial para triagem médica remota em regiões isoladas."
            />
            <InfoCard
              title="Propósito"
              description="Apoiar a triagem médica remota considerando não apenas dados clínicos, mas também contexto espacial, climático e de conectividade do paciente."
            />
            <InfoCard
              title="Contexto"
              description="Camada inteligente integrável a plataformas de telemedicina existentes, usando dados geoespaciais e conectividade via satélite para priorização médica."
            />
          </div>
        </div>

        <div className="identity-visual">
          <div className="mockup-card">
            <div className="mockup-header">
              <span className="mockup-logo">✦ Medistar</span>
              <span className="mockup-live">AO VIVO</span>
            </div>

            <div className="mockup-priority-section">
              <div className="mockup-priority-label">
                <span className="mockup-priority-dot" />
                Urgente com barreira de acesso
              </div>
              <div className="mockup-patient-name">Ana R. — Comunidade Ribeirinha</div>
            </div>

            <div className="mockup-divider" />

            <div className="mockup-data-rows">
              <div className="mockup-row">
                <span>Conexão via satélite</span>
                <span className="mockup-row-warn">Instável</span>
              </div>
              <div className="mockup-row">
                <span>Risco climático</span>
                <span className="mockup-row-warn">Enchente</span>
              </div>
              <div className="mockup-row">
                <span>Distância ao hospital</span>
                <span className="mockup-row-neutral">180 km</span>
              </div>
              <div className="mockup-row">
                <span>Sintomas</span>
                <span className="mockup-row-neutral">Febre + tontura</span>
              </div>
            </div>

            <div className="mockup-divider" />

            <div className="mockup-score-label">Score de prioridade</div>
            <div className="mockup-score-value">94<span>/100</span></div>
            <div className="mockup-bar">
              <div className="mockup-bar-fill" />
            </div>

            <div className="mockup-recommendation">
              Teleatendimento imediato recomendado
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
