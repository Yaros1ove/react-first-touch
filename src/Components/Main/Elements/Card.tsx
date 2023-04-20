import styles from './Card.module.sass'
type Props = {
  background: string
}

function Card({ background }: Props) {
  const name = background.slice(background.lastIndexOf('/') + 1, background.indexOf('.'))
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${background})` }}>
      {name}
    </div>
  )
}

export default Card