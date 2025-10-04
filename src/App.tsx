import './App.css'
import NewYear from './assets/new-year.png'
import Counter from './components/Counter/Counter'
import Title from './components/Title/Title'
import useCountdown from './hooks/useCountdown'

function App() {
  const [day, hour, minute, second] = useCountdown(new Date('2026-01-01T00:00:00'))

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="Contagem Regressiva para 2026!" />
        <div className="countdown_container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
