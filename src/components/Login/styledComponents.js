import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`
export const LoginSubContainer = styled.div`
  background-color: #f9f9f9;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`
export const LoginLogoContainer = styled.div`
  text-align: center;
`
export const LoginLogo = styled.img`
  height: 30px;
  width: 100px;
  margin-bottom: 25px;
`
export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelLogin = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #616e7c;
  margin-bottom: 6px;
`
export const InputLogin = styled.input`
  border: 1px solid #d7dfe9;
  margin-bottom: ${props => (props.marginBottom ? '6px' : '25px')};
  height: 35px;
  padding-left: 10px;
  width: 300px;
`
export const InputCheckBox = styled.input`
  height: 17px;
  width: 17px;
  margin-right: 10px;
`
export const LabelCheckBox = styled.label`
  font-size: 15px;
`
export const CheckBoxLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  font-family: Roboto;
  border: none;
  outline: none;
`
export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #ff0000;
`
