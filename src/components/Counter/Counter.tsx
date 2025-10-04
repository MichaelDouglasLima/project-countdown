import styles from './counter.module.css'

interface ICounter {
  title: string
  number: number
}

function Counter({ title, number }: ICounter) {
  return (
    <div className={styles.counter}>
      <p className={styles.counter_number}>{number}</p>
      <h3 className={styles.counter_text}>{title}</h3>
    </div>
  )
}

export default Counter