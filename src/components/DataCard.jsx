export default function DataCard({ badge, title, subtitle, description, children, accent = 'blue' }) {
  return (
    <article className="card">
      <span className={`card-badge ${accent === 'green' ? 'accent' : accent === 'gray' ? 'neutral' : ''}`}>
        {badge}
      </span>
      {title && <h3>{title}</h3>}
      {subtitle && <p><strong>{subtitle}</strong></p>}
      {description && <p>{description}</p>}
      {children}
    </article>
  )
}
