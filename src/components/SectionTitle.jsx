import React from 'react'

const SectionTitle = React.memo(({ title, description }) => (
  <header className="section-header">
    <p className="eyebrow">Dashboard</p>
    <h1>{title}</h1>
    <p className="section-description">{description}</p>
  </header>
))

export default SectionTitle
