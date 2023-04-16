import brandLogo from '../../../Images/brand.png'
import PartnerBrand from "./PartnerBrand"
import line from '../../../Images/line2.png'

import styles from './PartnerBrandLine.module.sass'

function PartnerBrandLine() {
  const brands = [brandLogo, brandLogo, brandLogo, brandLogo, brandLogo, brandLogo]
  return (
    <>
      <div className={styles.line}>
        {brands.map((brand, index) => {
          return <>
            {index ? <img key={index} src={line} alt='' /> : <></>}
            <PartnerBrand brandLogo={brand} />
          </>
        })}
      </div>
    </>
  )
}

export default PartnerBrandLine