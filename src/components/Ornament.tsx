type OrnamentProps = { className?: string }

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <svg className={`ornament ${className}`} viewBox="0 0 160 40" aria-hidden="true">
      <path d="M0 20h46c13 0 16-15 28-15 12 0 15 15 28 15s16-15 28-15c12 0 15 15 30 15" />
      <path d="M0 20h46c13 0 16 15 28 15 12 0 15-15 28-15s16 15 28 15c12 0 15-15 30-15" />
      <circle cx="80" cy="20" r="3" />
    </svg>
  )
}
