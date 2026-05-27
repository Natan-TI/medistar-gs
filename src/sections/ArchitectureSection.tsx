import { InfoCard } from '../components/InfoCard';

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section architecture-section">
      <span className="tag">Azure Cloud</span>

      <h2>Arquitetura preparada para Secure DevOps.</h2>

      <p>
        A aplicação será publicada no Azure App Service, com deploy automatizado via GitHub
        Actions, credenciais protegidas em GitHub Secrets, secrets da solução no Azure Key Vault e
        monitoramento com Application Insights.
      </p>

      <div className="architecture-grid">
        <InfoCard
          title="Deploy"
          description="GitHub Actions com publicação automática no Azure App Service."
        />

        <InfoCard
          title="Segurança"
          description="Uso de GitHub Secrets, Azure Key Vault e controle de acesso por IAM."
        />

        <InfoCard
          title="Monitoramento"
          description="Application Insights, métricas da aplicação, logs e regra de alerta."
        />
      </div>
    </section>
  );
}