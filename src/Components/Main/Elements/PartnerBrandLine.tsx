import brandLogo from '../../../Images/brand.png'
import PartnerBrand from "./PartnerBrand"
import line from '../../../Images/line2.png'

import styles from './PartnerBrandLine.module.sass'
import React from 'react'

function PartnerBrandLine() {
  const brands = [brandLogo, brandLogo, brandLogo, brandLogo, brandLogo, brandLogo]
  return (
    <>
      <div className={styles.line}>
        {brands.map((brand, index) => {
          return <React.Fragment key={index}>
            {index ? <img src={line} alt='' /> : <></>}
            <PartnerBrand brandLogo={brand} />
          </React.Fragment>
        })}
      </div>
    </>
  )
}

export default PartnerBrandLine