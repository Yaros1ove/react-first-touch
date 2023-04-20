import classNames from 'classnames'

import Logo from '../../Logo'
import search from '../../Images/search.png'
import account from '../../Images/account.png'
import HeaderButton from './HeaderButton'
import styles from './Header.module.sass'
import { useState } from 'react'
import useScroll from '../../Hooks/useScroll'

function Header() {

  const [scroll, setScroll] = useState(0)
  useScroll(setScroll)

  return (
    <div className={(scroll < 50) ? classNames(styles.header, styles.header_transparent) : styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <div className={styles.header__buttons_left}>
            <HeaderButton><p onClick={() => { }}>Counterparties</p></HeaderButton>
            <HeaderButton><p onClick={() => { }}>Designers</p></HeaderButton>
            <HeaderButton><p onClick={() => { }}>Jobs</p></HeaderButton>
          </div>
          <Logo />
          <div className={styles.header__buttons_right}>
            <HeaderButton>
              <div className={styles.header__icons}>
                <img onClick={() => { }} src={search} alt='search'></img>
                <p onClick={() => { }}>Search</p>
              </div>
            </HeaderButton>
            <HeaderButton><p onClick={() => { }}>Log in/Registration</p></HeaderButton>
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