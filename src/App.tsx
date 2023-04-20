import Header from './Components/Header/Header'
import PartnerBrandLine from './Components/Main/Elements/PartnerBrandLine'
import Main from './Components/Main/Main'
import Cards from './Components/Main/Elements/Cards'
import MainPageButton from './Components/UI/MainPageButton'
import { useState } from 'react'

import rings from './Images/Rings.png'
import earings from './Images/Earings.png'
import pedants from './Images/Pendants.png'
import cufflinks from './Images/Cufflinks.png'
import bracelets from './Images/Bracelets.png'
import clocks from './Images/Clocks.png'

function App() {
  const [cards, setCards] = useState([rings, earings, pedants, cufflinks, bracelets, clocks])
  return (
    <>
      <Header></Header>
      <Main separateChildren={
        <div>
          <PartnerBrandLine />
        </div>
      } bgColor='top'>
        <div className='topInner'>
          <p className='topHeader'>Long, expensive, rich!</p>
          <MainPageButton>catalogue</MainPageButton>
        </div>
      </Main>
      <Main bgColor='white'><Cards cards={cards}></Cards></Main>
      <Main bgColor='black'>gg</Main>
    </>
  )
}

export default App
