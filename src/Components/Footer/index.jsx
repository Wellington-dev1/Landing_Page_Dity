import linkdin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

import {ContainerImg} from './styles'
function Footer() {



    return(
        <ContainerImg>
          
           <img src={linkdin} />
           <img src={facebook} />
           <img src={instagram} />
           <img src={twitter} />
        </ContainerImg>
    )
}

export default Footer