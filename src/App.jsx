import { Routes, Route } from 'react-router-dom'
import GreetingPage from './pages/GreetingPage.jsx'
import PinPage from './pages/PinPage.jsx'
import ApologyPage from './pages/ApologyPage.jsx'
import ForgiveePage from './pages/ForgiveePage.jsx'
import AgreementPage from './pages/AgreementPage.jsx'
import HugPage from './pages/HugPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GreetingPage />} />
      <Route path="/pin" element={<PinPage />} />
      <Route path="/apology" element={<ApologyPage />} />
      <Route path="/forgivee" element={<ForgiveePage />} />
      <Route path="/agreement" element={<AgreementPage />} />
      <Route path="/hug" element={<HugPage />} />
    </Routes>
  )
}

export default App
