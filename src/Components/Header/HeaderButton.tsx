import {Props} from '../../Constants/types'

import styles from './HeaderButton.module.sass'

// interface Props {
//   children: ReactNode
// }

function HeaderButton({children, ...props}: Props) {
  return (
    <div className={styles.header__button}>{children}</div>
  )
}

export default HeaderButton