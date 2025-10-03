import './App.css'
import Counter from './components/Counter/Counter'
import Title from './components/Title/Title'

import NewYear from './assets/new-year.png'

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="Contagem Regressiva para 2026!" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  )
}

export default App
