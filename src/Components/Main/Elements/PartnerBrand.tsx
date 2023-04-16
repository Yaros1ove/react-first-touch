import { Props } from '../../../Constants/types'
import styles from './PartnerBrand.module.sass'

function PartnerBrand({brandLogo}: Props) {

  console.log(brandLogo)
  return (
    <img className={styles.partnerBrand} src={brandLogo} alt="" />
  )
}

export default PartnerBrand