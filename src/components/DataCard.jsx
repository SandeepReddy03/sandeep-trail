import React from 'react'

const DataCard = React.memo(({ badge, title, subtitle, description, children, accent = 'blue', onClick }) => (
  <article
    className="card"
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if ((event.key === 'Enter' || event.key === ' ') && onClick) {
        event.preventDefault()
        onClick()
      }
    }}
  >
    <span className={`card-badge ${accent === 'green' ? 'accent' : accent === 'gray' ? 'neutral' : ''}`}>
      {badge ?? 'Item'}
    </span>
    {title && <h3>{title}</h3>}
    {subtitle && <p><strong>{subtitle}</strong></p>}
    {description && <p>{description}</p>}
    {children ?? null}
  </article>
))

export default DataCard
