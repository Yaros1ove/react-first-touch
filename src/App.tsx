import Header from './Components/Header/Header'
import PartnerBrandLine from './Components/Main/Elements/PartnerBrandLine'
import Main from './Components/Main/Main'

import brandLogo from './Images/brand.png'

console.log(brandLogo)


function App() {
  return (
    <>
      <Header></Header>
      <Main separator={true} bgColor='top'>
        <div>
          <PartnerBrandLine/>
        </div>
      </Main>
      <Main bgColor='white'>gg</Main>
      <Main bgColor='black'>gg</Main>
    </>
  )
}

export default App;
