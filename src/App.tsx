import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

import bgc from './Images/bgc_ring.png'
import { background } from './Constants/types'




function App() {
  return (
    <>
      <Header></Header>
      <Main background={bgc}></Main>
      <Main background={background}></Main>
    </>
  )
}

export default App;
