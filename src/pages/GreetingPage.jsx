import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function GreetingPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <FloatingHearts count={15} />

      <div className="card">
        <div className="card-emoji">🥺</div>
        <h1 className="card-title">I'm Really Sorry...</h1>
        <div className="divider" />
        <p className="card-subtitle">
          I know I messed up, and I feel terrible about it.
        </p>
        <p className="card-text">
          Before I say everything I want to say, I need to know it's really you.
          Please enter the special PIN to continue. 💕
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/pin')}
        >
          Let me explain 💌
        </button>
      </div>
    </div>
  )
}
