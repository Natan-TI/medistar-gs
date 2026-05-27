import { HeroCard } from '../components/HeroCard';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">Global Solution • Indústria Espacial • Telemedicina</span>

        <h1>Medistar</h1>

        <p className="subtitle">
          Camada inteligente de dados espaciais para apoiar a telemedicina em regiões isoladas.
        </p>

        <p className="description">
          O Medistar combina dados clínicos, localização geográfica, conectividade via satélite,
          riscos climáticos e barreiras de acesso para apoiar a priorização de atendimentos médicos
          remotos.
        </p>

        <div className="hero-actions">
          <a href="#dashboard" className="primary-button">
            Ver dashboard
          </a>

          <a href="#problem" className="secondary-button">
            Entender problema
          </a>
        </div>
      </div>

      <HeroCard />
    </section>
  );
}