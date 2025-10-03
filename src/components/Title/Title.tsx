interface ITitle {
  title: string
}

function Title({ title }: ITitle) {
  return (
    <h1>{title}</h1>
  )
}

export default Title