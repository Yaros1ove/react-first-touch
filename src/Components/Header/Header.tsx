import Logo from '../../Logo'
import search from '../../Images/search.png'
import account from '../../Images/account.png'
import HeaderButton from './HeaderButton'
import styles from './Header.module.sass'

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__buttons_left}>
            <HeaderButton><p onClick={() => { }}>Контрагентам</p></HeaderButton>
            <HeaderButton><p onClick={() => { }}>Дизайнерам</p></HeaderButton>
            <HeaderButton><p onClick={() => { }}>Вакансии</p></HeaderButton>
          </div>
          <Logo />
          <div className={styles.header__buttons_right}>
            <HeaderButton>
              <div className={styles.header__icons}>
                <img onClick={() => { }} src={search} alt='search'></img>
                <p onClick={() => { }}>Поиск</p>
              </div>
            </HeaderButton>
            <HeaderButton><p onClick={() => { }}>Вход/Регистрация</p></HeaderButton>
            <HeaderButton>
              <div className={styles.header__icons}>
                <img onClick={() => { }} src={account} alt='account'></img>
              </div>
            </HeaderButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header