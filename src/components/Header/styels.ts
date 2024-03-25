import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { colors } from "../../styles";

export const Container = styled.header`
  max-width: 1024px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #eee;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    max-width: 100px;
    width: 100%;
  }
`
export const Pesquisa = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: 8px;
`

export const Input = styled.input`
  max-width: 600px;
  width: 100%;
  height: 30px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${colors.green};
  background-color: ${colors.main};
  color: ${colors.black};
  font-size: 18px;

  &::placeholder{
    color: ${colors.white};
    font-size: 18px;
  }
`

export const Icon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${colors.white};
  cursor: pointer;
`

export const DivIcons = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  color: ${colors.main};
  cursor: pointer;

  p{
    font-size: 14px;
    color: ${colors.black};
    margin-top: 4px;
  }
`
