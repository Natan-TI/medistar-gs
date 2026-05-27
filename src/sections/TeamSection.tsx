import { TeamMemberCard } from '../components/TeamMemberCard';
import { teamMembers } from '../data/teamMembers';

export function TeamSection() {
  return (
    <section id="team" className="section team-section">
      <span className="tag">Equipe</span>

      <h2>Integrantes do projeto</h2>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            image={member.image}
            initials={member.initials}
          />
        ))}
      </div>
    </section>
  );
}