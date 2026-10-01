export default function SectionTitle({ title, description }) {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
