export function Header() {
  return (
    <header className="site-header">
      <a href="#" className="brand">
        <span className="brand-icon">✦</span>
        <span>Medistar</span>
      </a>

      <nav className="nav-links">
        <a href="#identity">Produto</a>
        <a href="#problem">Problema</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#team">Equipe</a>
      </nav>

      <a href="#dashboard" className="header-button">
        Ver simulação
      </a>
    </header>
  );
}