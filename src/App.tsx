import './index.css';

const teamMembers = [
  {
    name: 'Gustavo Henrique Santos Bonfim',
    image: '/team/gustavo.jpg',
    initials: 'GB',
  },
  {
    name: 'Kayky Paschoal Ribeiro',
    image: '/team/kayky.jpg',
    initials: 'KR',
  },
  {
    name: 'Lucas Yuji Farias Umada',
    image: '/team/lucas.jpg',
    initials: 'LU',
  },
  {
    name: 'Natan Eguchi dos Santos',
    image: '/team/natan.jpg',
    initials: 'NS',
  },
  {
    name: 'João Pedro Marques Rodrigues',
    image: '/team/joao.jpg',
    initials: 'JR',
  },
];

const patients = [
  {
    name: 'Ana R.',
    region: 'Comunidade Ribeirinha',
    symptoms: 'Febre e tontura',
    connection: 'Instável',
    distance: '180 km',
    climateRisk: 'Chuva intensa',
    priority: 'Urgente com barreira de acesso',
    level: 'high',
  },
  {
    name: 'João M.',
    region: 'Zona rural próxima',
    symptoms: 'Febre moderada',
    connection: 'Boa',
    distance: '12 km',
    climateRisk: 'Baixo',
    priority: 'Atenção',
    level: 'medium',
  },
  {
    name: 'Carla S.',
    region: 'Área isolada',
    symptoms: 'Falta de ar',
    connection: 'Instável',
    distance: '95 km',
    climateRisk: 'Risco de enchente',
    priority: 'Urgente',
    level: 'high',
  },
  {
    name: 'Pedro L.',
    region: 'Distrito remoto',
    symptoms: 'Dor leve',
    connection: 'Média',
    distance: '40 km',
    climateRisk: 'Normal',
    priority: 'Baixo risco',
    level: 'low',
  },
];

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
            O Medistar combina dados clínicos, localização geográfica, conectividade via satélite,
            riscos climáticos e barreiras de acesso para apoiar a priorização de atendimentos
            médicos remotos.
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

        <div className="hero-card">
          <p className="card-label">Prioridade atual</p>
          <h2>Urgente com barreira de acesso</h2>
          <p>
            Paciente em comunidade isolada, com conexão instável, risco de enchente e hospital a
            180 km de distância.
          </p>
        </div>
      </section>

      <section id="identity" className="section identity-section">
        <span className="tag">Identidade do produto</span>
        <h2>Uma solução para tornar a telemedicina mais contextualizada, justa e eficiente.</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Nome</h3>
            <p>Medistar</p>
          </div>

          <div className="info-card">
            <h3>Propósito</h3>
            <p>
              Apoiar a triagem médica remota em regiões isoladas, considerando não apenas os dados
              clínicos, mas também o contexto espacial, climático e de conectividade do paciente.
            </p>
          </div>

          <div className="info-card">
            <h3>Contexto</h3>
            <p>
              A solução simula uma camada inteligente que poderia ser integrada a plataformas de
              telemedicina já existentes.
            </p>
          </div>
        </div>
      </section>

      <section id="problem" className="section">
        <span className="tag">Problema espacial</span>
        <h2>Regiões isoladas exigem mais do que uma triagem clínica tradicional.</h2>

        <p>
          Plataformas comuns de telemedicina analisam principalmente os dados clínicos do paciente.
          Porém, em comunidades remotas, o risco real também depende de fatores como distância até
          hospitais, qualidade da conexão, clima severo, enchentes, queimadas, isolamento geográfico
          e dificuldade de transporte.
        </p>

        <p>
          Com o apoio de dados geoespaciais, conectividade via satélite e informações ambientais
          simuladas, o Medistar melhora a priorização dos atendimentos e ajuda médicos remotos a
          tomarem decisões com mais contexto.
        </p>
      </section>

      <section className="section ods-section">
        <span className="tag">ODS conectado</span>
        <h2>ODS 3 — Saúde e Bem-Estar</h2>

        <p>
          O Medistar está conectado ao ODS 3 por buscar melhorar o acesso à saúde em regiões
          isoladas, apoiando a telemedicina com dados espaciais e priorização inteligente de
          atendimento.
        </p>

        <div className="ods-grid">
          <div className="info-card">
            <h3>ODS principal</h3>
            <p>ODS 3 — Saúde e Bem-Estar</p>
          </div>

          <div className="info-card">
            <h3>ODS complementar</h3>
            <p>ODS 9 — Indústria, Inovação e Infraestrutura</p>
          </div>

          <div className="info-card">
            <h3>Impacto social</h3>
            <p>
              Redução de desigualdades no acesso à saúde para comunidades remotas, ribeirinhas,
              rurais ou de difícil deslocamento.
            </p>
          </div>
        </div>
      </section>

      <section id="dashboard" className="section dashboard-section">
        <span className="tag">Funcionamento da solução</span>
        <h2>Dashboard simulado de priorização médica com dados espaciais.</h2>

        <p>
          A aplicação recebe dados clínicos do paciente e adiciona informações externas da região,
          como conexão via satélite, distância até unidade de saúde, risco climático e dificuldade de
          deslocamento. Com isso, gera uma prioridade de atendimento.
        </p>

        <div className="flow">
          <div>Dados clínicos</div>
          <span>+</span>
          <div>Dados espaciais</div>
          <span>+</span>
          <div>Risco regional</div>
          <span>=</span>
          <div>Prioridade médica</div>
        </div>

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
            <span>Sintomas</span>
            <span>Conexão</span>
            <span>Distância</span>
            <span>Risco</span>
            <span>Prioridade</span>
          </div>

          {patients.map((patient) => (
            <div className="table-row" key={patient.name}>
              <span>{patient.name}</span>
              <span>{patient.region}</span>
              <span>{patient.symptoms}</span>
              <span>{patient.connection}</span>
              <span>{patient.distance}</span>
              <span>{patient.climateRisk}</span>
              <strong className={`priority ${patient.level}`}>{patient.priority}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section architecture-section">
        <span className="tag">Azure Cloud</span>
        <h2>Arquitetura preparada para Secure DevOps.</h2>

        <p>
          A aplicação será publicada no Azure App Service, com deploy automatizado via GitHub
          Actions, credenciais protegidas em GitHub Secrets, secrets da solução no Azure Key Vault e
          monitoramento com Application Insights.
        </p>

        <div className="architecture-grid">
          <div className="info-card">
            <h3>Deploy</h3>
            <p>GitHub Actions com publicação automática no Azure App Service.</p>
          </div>

          <div className="info-card">
            <h3>Segurança</h3>
            <p>Uso de GitHub Secrets, Azure Key Vault e controle de acesso por IAM.</p>
          </div>

          <div className="info-card">
            <h3>Monitoramento</h3>
            <p>Application Insights, métricas da aplicação, logs e regra de alerta.</p>
          </div>
        </div>
      </section>

      <section id="team" className="section team-section">
        <span className="tag">Equipe</span>
        <h2>Integrantes do projeto</h2>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-member" key={member.name}>
              <div className="avatar">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                {/* <span>{member.initials}</span> */}
              </div>

              <h3>{member.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;