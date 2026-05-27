import { MetricCard } from '../components/MetricCard';
import { PatientTable } from '../components/PatientTable';

export function DashboardSection() {
  return (
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
        <MetricCard label="Pacientes monitorados" value="24" />
        <MetricCard label="Alertas críticos" value="5" />
        <MetricCard label="Regiões isoladas" value="8" />
        <MetricCard label="Conexões instáveis" value="11" />
      </div>

      <PatientTable />
    </section>
  );
}