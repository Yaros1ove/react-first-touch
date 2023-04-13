import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

import bgc from './Images/bgc_ring.png'

function App() {
  return (
    <>
      <Header></Header>
      <Main background={bgc}></Main>
    </>
  )
}

export default App;
