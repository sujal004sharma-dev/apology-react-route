import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function GreetingPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <FloatingHearts count={15} />

      <div className="card">
        <div className="card-emoji">🥺🙏</div>
        <h1 className="card-title">I'm Really very very very  Sorry...</h1>
        <div className="divider" />
        <p className="card-subtitle">
          I know I messed up, and I feel terrible about it i am very much realizing what i have done .
        </p>
        <p className="card-text">
          Before I say everything I want to say, I need to know that  it's really you i am nothing and i always messes up and hurt you literally .
          
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
