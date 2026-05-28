import { HeroCard } from '../components/HeroCard';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">Global Solution • Space Health Intelligence</span>

        <div className="hero-brand-name">Medistar</div>

        <h1>
          Telemedicina inteligente para regiões isoladas.
        </h1>

        <p className="subtitle">
          O Medistar usa dados espaciais, conectividade via satélite e contexto regional para
          priorizar atendimentos médicos remotos com mais precisão.
        </p>

        <p className="description">
          A solução simula uma camada de inteligência capaz de combinar dados clínicos com fatores
          geográficos, climáticos e de conectividade, ajudando médicos a tomarem decisões mais
          rápidas em comunidades remotas.
        </p>

        <div className="hero-actions">
          <a href="#dashboard" className="primary-button">
            Explorar dashboard
          </a>

          <a href="#problem" className="secondary-button">
            Conhecer problema
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>24</strong>
            <span>pacientes simulados</span>
          </div>

          <div>
            <strong>8</strong>
            <span>regiões isoladas</span>
          </div>

          <div>
            <strong>5</strong>
            <span>alertas críticos</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="planet">
          <div className="planet-glow" />
          <div className="satellite satellite-one">▣</div>
          <div className="satellite satellite-two">◆</div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}