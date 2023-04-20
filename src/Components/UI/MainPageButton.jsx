import styles from './MainPageButton.module.sass'

function MainPageButton({children}) {
  return (
    <button className={styles.mainPageButton}>
      {children}
    </button>
  )
}

export default MainPageButton