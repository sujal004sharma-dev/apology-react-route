import { useMemo } from 'react'

const colors = ['#ff6b9d', '#c084fc', '#60a5fa', '#fb7185', '#fbbf24', '#34d399']
const shapes = ['circle', 'square', 'triangle']

export default function Confetti({ count = 50 }) {
  const pieces = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const color = colors[i % colors.length]
      const shape = shapes[i % shapes.length]
      const left = Math.random() * 100
      const delay = Math.random() * 2
      const duration = 2 + Math.random() * 2
      const size = 6 + Math.random() * 8

      const style = {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: shape === 'circle' ? '50%' : shape === 'triangle' ? '0' : '2px',
        clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
      }

      return <div key={i} className="confetti-piece" style={style} />
    })
  }, [count])

  return <div className="confetti-container">{pieces}</div>
}
