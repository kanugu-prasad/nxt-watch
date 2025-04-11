import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor && '#181818'};
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
`
export const NavImage = styled.img`
  width: 90px;
`
export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ItemButton = styled.button`
  margin-right: 20px;
  background-color: transparent;
  border: none;
  margin-right: ${props => props.marginRight}px;
  @media (min-width: 768px) {
    display: ${props => props.avalable};
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;

  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`
export const LogoutButton = styled.button`
  display: none;
  background-color: transparent;
  font-family: Roboto;
  font-size: 18px;
  height: 30px;
  margin-right: 15px;
  width: 90px;
  height: 35px;
  outline: none;
  border-radius: 4px;
  color: ${props => (props.color ? '#ffffff' : '#3b82f6')};
  border-color: ${props => (props.color ? '#ffffff' : '#3b82f6')};
  @media (min-width: 768px) {
    display: inline;
  }
`
export const PopContainer = styled.div`
  background-color: ${props => (props.popBgStyle ? '#313131' : '#ffffff')};
  padding: 30px;
`
export const PopPara = styled.p`
  color: ${props => (props.color ? '#ffffff' : '#00306e')};
  font-size: 15px;
  font-family: Roboto;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const TwoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const CloseButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  width: 100px;
  height: 35px;
  outline: none;
  border-radius: 4px;
  background-color: transparent;
  color: #94a3b8;
  border-color: #94a3b8;
  @media (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 18px;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  width: 100px;
  height: 35px;
  outline: none;
  border-radius: 4px;
  border: none;
  margin-left: 20px;
  @media (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 18px;
  }
`
