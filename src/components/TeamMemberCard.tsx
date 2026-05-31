type TeamMemberCardProps = {
  name: string;
  image: string;
  initials: string;
};

export function TeamMemberCard({ name, image, initials }: TeamMemberCardProps) {
  return (
    <article className="team-member">
      <div className="avatar">
        <img
          src={image}
          alt={`Foto de ${name}`}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <span>{initials}</span>
      </div>

      <h3>{name}</h3>
    </article>
  );
}