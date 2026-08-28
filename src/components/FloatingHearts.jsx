import { useMemo } from 'react'

const hearts = ['💗', '💕', '💖', '✨', '💫', '🌸']

export default function FloatingHearts({ count = 12 }) {
  const heartElements = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const emoji = hearts[i % hearts.length]
      const left = Math.random() * 100
      const delay = Math.random() * 6
      const duration = 5 + Math.random() * 4
      const size = 14 + Math.random() * 14

      return (
        <span
          key={i}
          className="heart"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}px`,
          }}
        >
          {emoji}
        </span>
      )
    })
  }, [count])

  return <div className="floating-hearts">{heartElements}</div>
}
