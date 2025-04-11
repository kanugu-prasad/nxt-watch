import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginMainContainer,
  LoginSubContainer,
  LoginLogoContainer,
  LoginLogo,
  LoginContainer,
  LabelLogin,
  InputLogin,
  InputCheckBox,
  LabelCheckBox,
  CheckBoxLabelContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorStatus: false,
    errorMsg: '',
    passwordStatus: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailue = errorMsg => {
    this.setState({errorStatus: true, errorMsg})
  }

  onSubmitform = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailue(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePasswordStatus = () => {
    this.setState(prevState => ({passwordStatus: !prevState.passwordStatus}))
  }

  render() {
    const {errorStatus, errorMsg, passwordStatus} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainContainer>
        <LoginSubContainer>
          <LoginLogoContainer>
            <LoginLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="channel logo"
            />
          </LoginLogoContainer>
          <LoginContainer onSubmit={this.onSubmitform}>
            <LabelLogin htmlFor="userInput">USERNAME</LabelLogin>
            <InputLogin
              type="text"
              id="userInput"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <LabelLogin htmlFor="userPassword">PASSWORD</LabelLogin>
            <InputLogin
              type={passwordStatus ? 'text' : 'password'}
              placeholder="Password"
              marginBottom="6"
              id="userPassword"
              onChange={this.onChangePassword}
            />
            <CheckBoxLabelContainer>
              <InputCheckBox
                type="checkbox"
                id="checkBox"
                onChange={this.onChangePasswordStatus}
              />
              <LabelCheckBox htmlFor="checkBox">Show Password</LabelCheckBox>
            </CheckBoxLabelContainer>
            <LoginButton type="submit">Login</LoginButton>
            {errorStatus && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          </LoginContainer>
        </LoginSubContainer>
      </LoginMainContainer>
    )
  }
}
export default Login
