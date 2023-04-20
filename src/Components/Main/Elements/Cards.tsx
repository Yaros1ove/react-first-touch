import { Props } from "../../../Constants/types"
import Card from "./Card"
import styles from './Cards.module.sass'


function Cards({cards}: Props) {
  return (
    <div className={styles.cards}>
      {cards?.map(card => <Card background={card} key={card}></Card>)}
    </div>
  )
}

export default Cards