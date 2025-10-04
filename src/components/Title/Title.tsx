import styles from './Title.module.css'

interface ITitle {
  title: string
}

function Title({ title }: ITitle) {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default Title