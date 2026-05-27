export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
      <div className="footer-content">
        <div className="footer-column footer-brand">
          <h3>
            <span className="brand-icon" style={{ width: 28, height: 28, fontSize: '0.7rem' }}>✦</span>
            Medistar
          </h3>
          <p>
            Camada inteligente de dados espaciais para apoiar a telemedicina em regiões isoladas.
          </p>
        </div>

        <div className="footer-column">
          <h4>Navegação</h4>
          <a href="#problem">Problema</a>
          <a href="#identity">Solução</a>
          <a href="#dashboard">Como funciona</a>
          <a href="#team">Equipe</a>
        </div>

        <div className="footer-column">
          <h4>Recursos</h4>
          <a href="#dashboard">Dashboard</a>
          <a href="#architecture">Arquitetura Azure</a>
          <a href="#ods">ODS conectado</a>
          <a href="#problem">Contexto espacial</a>
        </div>

        <div className="footer-column">
          <h4>Projeto</h4>
          <span>Global Solution</span>
          <span>Secure DevOps Tools</span>
          <span>Cloud Computing</span>
          <span>Microsoft Azure</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Medistar. Todos os direitos reservados.</span>

        <div>
          <a href="#identity">Política de Privacidade</a>
          <a href="#identity">Termos de Uso</a>
        </div>
      </div>
      </div>
    </footer>
  );
}