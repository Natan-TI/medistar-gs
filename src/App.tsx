import './index.css';

function App() {
  return (
    <main className="app">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Global Solution • Indústria Espacial • Telemedicina</span>

          <h1>Medistar</h1>

          <p className="subtitle">
            Camada inteligente de dados espaciais para apoiar a telemedicina em regiões isoladas.
          </p>

          <p className="description">
            A solução combina dados clínicos, localização geográfica, conectividade via satélite,
            riscos climáticos e barreiras de acesso para apoiar a priorização de atendimentos
            médicos remotos.
          </p>

          <div className="hero-actions">
            <a href="#dashboard" className="primary-button">
              Ver dashboard
            </a>

            <a href="#solution" className="secondary-button">
              Entender solução
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Prioridade atual</p>
          <h2>Urgente com barreira de acesso</h2>
          <p>
            Paciente em comunidade isolada, com conexão instável, risco de enchente e hospital a
            180 km de distância.
          </p>
        </div>
      </section>

      <section id="solution" className="section">
        <span className="tag">Problema</span>
        <h2>Telemedicina tradicional não considera todo o contexto da região.</h2>
        <p>
          Em regiões isoladas, dois pacientes com sintomas parecidos podem ter prioridades
          diferentes dependendo da distância até o hospital, da qualidade da conexão, do clima e da
          possibilidade real de deslocamento.
        </p>
      </section>

      <section id="dashboard" className="section dashboard-section">
        <span className="tag">Dashboard simulado</span>
        <h2>Fila inteligente de atendimento</h2>

        <div className="dashboard-grid">
          <div className="metric-card">
            <p>Pacientes monitorados</p>
            <strong>24</strong>
          </div>

          <div className="metric-card">
            <p>Alertas críticos</p>
            <strong>5</strong>
          </div>

          <div className="metric-card">
            <p>Regiões isoladas</p>
            <strong>8</strong>
          </div>

          <div className="metric-card">
            <p>Conexões instáveis</p>
            <strong>11</strong>
          </div>
        </div>

        <div className="patient-table">
          <div className="table-header">
            <span>Paciente</span>
            <span>Região</span>
            <span>Conexão</span>
            <span>Distância</span>
            <span>Prioridade</span>
          </div>

          <div className="table-row">
            <span>Ana R.</span>
            <span>Comunidade Ribeirinha</span>
            <span>Instável</span>
            <span>180 km</span>
            <strong className="priority high">Urgente</strong>
          </div>

          <div className="table-row">
            <span>João M.</span>
            <span>Zona rural</span>
            <span>Boa</span>
            <span>12 km</span>
            <strong className="priority medium">Atenção</strong>
          </div>

          <div className="table-row">
            <span>Carla S.</span>
            <span>Área isolada</span>
            <span>Instável</span>
            <span>95 km</span>
            <strong className="priority high">Urgente</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="tag">Azure Cloud</span>
        <h2>Arquitetura preparada para DevSecOps.</h2>
        <p>
          A aplicação será publicada no Azure App Service, com deploy automatizado via GitHub
          Actions, credenciais protegidas em GitHub Secrets, secrets da solução no Azure Key Vault
          e monitoramento com Application Insights.
        </p>
      </section>
    </main>
  );
}

export default App;