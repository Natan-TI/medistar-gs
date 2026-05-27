type InfoCardProps = {
  title: string;
  description: string;
};

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}