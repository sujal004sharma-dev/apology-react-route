import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function ApologyPage() {
  const navigate = useNavigate()
  const [yesSize, setYesSize] = useState(16)
  const [noCount, setNoCount] = useState(0)

  const handleNo = useCallback(() => {
    setNoCount(prev => {
      const next = prev + 1
      // Increase font size, but cap it so it doesn't break the layout
      setYesSize(s => Math.min(s + 4, 60))
      return next
    })
  }, [])

  const handleYes = useCallback(() => {
    navigate('/forgivee')
  }, [navigate])

  const getNoText = () => {
    const texts = [
      'Nahi 😤',
      'Bilkul nahi 😠',
      'Kabhi nahi 🙅‍♀️',
      'Pakka nahi 😾',
      'Soch ke bataungi 🤔',
      'Hmm... nahi 😏',
      'Still no 😤',
      'Arre nahi bola na 😡',
      'Kitni baar bolu 🙄',
      'Okay fine... nahi 😜',
    ]
    return texts[Math.min(noCount, texts.length - 1)]
  }

  // Calculate yes button size with safe limits
  const yesPadding = Math.min(16 + noCount * 4, 40)
  const yesWidth = Math.min(200 + noCount * 30, 380)

  return (
    <div className="page">
      <FloatingHearts count={12} />

      <div className="card" style={{ maxWidth: '440px' }}>
        <div className="card-emoji">💌</div>
        <h1 className="card-title">Meri Jaan...</h1>
        <div className="divider" />

        <div className="apology-content">
          I know sorry isn't enough,{'\n'}
          but I truly mean it from{'\n'}
          the bottom of my heart.{'\n\n'}
          You mean everything to me,{'\n'}
          and hurting you was the{'\n'}
          last thing I ever wanted.{'\n\n'}
          Please give me a chance{'\n'}
          to make things right... 🥺💕
        </div>

        <div className="divider" />

        <p className="card-subtitle" style={{ marginTop: '16px', marginBottom: '20px' }}>
          Kya tum mujhe maaf karogi? 🥺
        </p>

        <div className="forgive-buttons">
          <button
            className="btn-yes"
            onClick={handleYes}
            style={{
              fontSize: `${yesSize}px`,
              padding: `${yesPadding}px 32px`,
              width: `${yesWidth}px`,
              maxWidth: '100%',
            }}
          >
            Haan, maaf kiya! 💗
          </button>

          <button
            className="btn-no"
            onClick={handleNo}
          >
            {getNoText()}
          </button>
        </div>

        {noCount > 0 && (
          <p
            className="card-text fade-in"
            style={{
              marginTop: '16px',
              marginBottom: '0',
              fontSize: '13px',
            }}
          >
            {noCount < 3
              ? 'Please? 🥺'
              : noCount < 6
              ? 'I won\'t give up... 😢💕'
              : noCount < 9
              ? 'The button is getting bigger because my love is too! 💗'
              : 'You know you want to press the big button 😏💖'}
          </p>
        )}
      </div>
    </div>
  )
}
