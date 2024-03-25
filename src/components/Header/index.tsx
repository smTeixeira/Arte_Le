import logo from '../../assets/logo.png'
import nome from '../../assets/nome_logo.png'
import { IoChatboxOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCart } from "react-icons/pi";

import { Container, ContainerLogo, Input, Icon, Pesquisa, DivIcons } from './styels'

const Header = () => {
  return (
    <Container>
      <ContainerLogo>
        <img src={logo} alt="logo" />
        <img src={nome} alt="Nome da Logo" />
      </ContainerLogo>
      <Pesquisa>
        <label htmlFor="search"/>
        <div style={{ position: 'relative' }}>
          <Input type="text" id="search" name="search" placeholder='O que você está procurando?'/>
          <Icon />
        </div >
      </Pesquisa>
      <DivIcons >
        <IoChatboxOutline size={30}/>
        <p>Atendimento</p>
      </DivIcons>
      <DivIcons>
        <VscAccount size={30} />
        <p>Minha Conta</p>
      </DivIcons>
      <DivIcons>
        <PiShoppingCart size={30}/>
        <p>Carrinho</p>

      </DivIcons>
    </Container>
  )
}

export default Header

