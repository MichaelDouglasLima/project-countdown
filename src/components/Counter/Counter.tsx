interface ICounter {
  title: string
  number: number
}

function Counter({ title, number }: ICounter) {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  )
}

export default Counter