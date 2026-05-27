import { InfoCard } from '../components/InfoCard';

export function OdsSection() {
  return (
    <section className="section ods-section">
      <span className="tag">ODS conectado</span>

      <h2>ODS 3 — Saúde e Bem-Estar</h2>

      <p>
        O Medistar está conectado ao ODS 3 por buscar melhorar o acesso à saúde em regiões isoladas,
        apoiando a telemedicina com dados espaciais e priorização inteligente de atendimento.
      </p>

      <div className="ods-grid">
        <InfoCard
          title="ODS principal"
          description="ODS 3 — Saúde e Bem-Estar"
        />

        <InfoCard
          title="ODS complementar"
          description="ODS 9 — Indústria, Inovação e Infraestrutura"
        />

        <InfoCard
          title="Impacto social"
          description="Redução de desigualdades no acesso à saúde para comunidades remotas, ribeirinhas, rurais ou de difícil deslocamento."
        />
      </div>
    </section>
  );
}