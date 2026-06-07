# Medistar — Telemedicina Inteligente com Dados Espaciais

Projeto desenvolvido para a **Global Solution** da disciplina **Secure DevOps Tools & Cloud Computing**, com foco na criação de uma solução cloud conectada à **Indústria Espacial**, utilizando o **Microsoft Azure** como plataforma principal.

## 📌 Sobre o projeto

O **Medistar** é uma aplicação web que simula uma camada inteligente para apoiar plataformas de telemedicina em regiões isoladas.

A proposta é melhorar a triagem médica remota combinando dados clínicos do paciente com dados espaciais e geoespaciais da região, como:

- conectividade via satélite;
- distância até unidades de saúde;
- risco climático;
- risco de enchente ou queimada;
- isolamento geográfico;
- dificuldade de deslocamento;
- qualidade da conexão;
- contexto territorial da comunidade.

A ideia central é que dois pacientes com sintomas semelhantes podem ter prioridades diferentes dependendo do local onde estão. Um paciente com febre moderada em uma cidade com hospital próximo pode ser classificado como **atenção**, enquanto outro paciente com os mesmos sintomas em uma comunidade ribeirinha isolada, com chuva intensa, conexão instável e hospital a 180 km, pode ser classificado como **urgente com barreira de acesso**.

## 🚀 Objetivo da solução

O objetivo do Medistar é representar uma solução de apoio à decisão médica que utiliza dados espaciais para melhorar a priorização de atendimentos em telemedicina, especialmente em regiões remotas, rurais, ribeirinhas ou de difícil acesso.

A aplicação apresenta uma landing page e um dashboard simulado com pacientes, métricas e classificações de prioridade.

## 🛰️ Conexão com a Indústria Espacial

O projeto se conecta à Indústria Espacial por meio de três pilares principais:

1. **Conectividade via satélite**  
   Simulação de atendimento em regiões onde a conexão terrestre pode ser instável ou inexistente.

2. **Dados geoespaciais**  
   Uso de informações de localização, distância, isolamento e contexto territorial para enriquecer a triagem médica.

3. **Sensoriamento remoto**  
   Representação de dados ambientais e climáticos, como enchentes, queimadas e condições severas, que podem afetar o acesso ao atendimento.

## 🌎 ODS relacionados

O Medistar está conectado principalmente ao:

### ODS 3 — Saúde e Bem-Estar

A solução busca apoiar o acesso à saúde em regiões isoladas, melhorando a triagem e priorização de atendimentos médicos remotos.

Também se relaciona com:

### ODS 9 — Indústria, Inovação e Infraestrutura

O projeto utiliza infraestrutura em nuvem, dados espaciais e automação DevOps para representar uma solução tecnológica inovadora.

### ODS 10 — Redução das Desigualdades

Ao considerar comunidades remotas e com barreiras de acesso, a solução contribui para reduzir desigualdades no atendimento à saúde.

## 🧭 Funcionalidades da aplicação

A aplicação contém:

- página inicial com identidade do produto;
- explicação do problema espacial abordado;
- descrição da solução proposta;
- conexão com os ODS;
- dashboard simulado de priorização médica;
- tabela de pacientes com dados clínicos e espaciais;
- métricas simuladas;
- seção de arquitetura cloud;
- seção com os integrantes da equipe.

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- HTML
- CSS
- GitHub
- GitHub Actions
- Microsoft Azure
- Azure App Service
- Azure Resource Group
- Azure Key Vault
- Azure Monitor
- Alert Rule
- Kudu

## ☁️ Arquitetura cloud

A arquitetura do projeto utiliza o Microsoft Azure como plataforma principal.

Fluxo simplificado:

```text
Desenvolvedor
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Azure App Service
    ↓
Usuário final
```

Fluxo de segurança e monitoramento:

```text
GitHub Secrets / Azure Key Vault
    ↓
Deploy seguro no Azure App Service
    ↓
Azure Monitor / Metrics / Log Stream
    ↓
Alert Rule / Action Group
```

## 🔐 Segurança aplicada

Foram aplicadas práticas de segurança vistas na disciplina:

- armazenamento de credenciais no **GitHub Secrets**;
- uso do **Azure Key Vault** para secret relacionado à solução;
- ativação de **HTTPS Only** no App Service;
- controle de acesso por **IAM/RBAC**;
- ausência de senhas e credenciais expostas no código-fonte;
- uso de logs e histórico de alterações para auditoria.

## ⚙️ Pipeline CI/CD

O deploy da aplicação foi automatizado com **GitHub Actions**.

A cada push na branch `main`, o workflow executa:

1. checkout do código;
2. configuração do Node.js;
3. instalação das dependências;
4. build da aplicação React/Vite;
5. autenticação segura no Azure;
6. deploy automático no Azure App Service.

O projeto possui evidência de múltiplos deploys automáticos executados com sucesso.

## 📊 Monitoramento

O monitoramento foi configurado com recursos do Azure, incluindo:

- métricas do App Service;
- Log Stream;
- Azure Monitor;
- Alert Rule;
- Action Group;
- teste de erro HTTP para validação de alerta.

## 📁 Estrutura do projeto

```text
medistar-gs/
├── public/
│   └── team/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.ts
└── README.md
```

## ▶️ Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/Natan-TI/medistar-gs
```

Acesse a pasta do projeto:

```bash
cd medistar-gs
```

Instale as dependências:

```bash
npm install
```

Execute o projeto localmente:

```bash
npm run dev
```

A aplicação será iniciada em:

```text
http://localhost:5173
```

## 🏗️ Build do projeto

Para gerar a versão de produção:

```bash
npm run build
```

O build será gerado na pasta:

```text
dist/
```

## 🚀 Deploy

A aplicação foi publicada no **Azure App Service**.

O deploy automatizado ocorre por meio do workflow do GitHub Actions localizado em:

```text
.github/workflows/deploy.yml
```

## 👥 Integrantes

| Nome | RM |
|---|---:|
| Natan Eguchi dos Santos | 98720 |
| Kayky Paschoal Ribeiro | 99929 |
| Lucas Yuji Farias Umada | 99757 |
| João Pedro Marques Rodrigues | 98307 |
| Gustavo Henrique Santos Bonfim | 98864 |

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais no contexto da Global Solution.

## 🔗 Links

- Aplicação publicada: https://webapp-medistar-gs-cvacfuhdfudmgect.brazilsouth-01.azurewebsites.net
- Repositório GitHub: https://github.com/Natan-TI/medistar-gs
