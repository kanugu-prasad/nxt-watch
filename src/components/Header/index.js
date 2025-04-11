import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {IoMenu} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import NextWatchContext from '../../context/NextWatchContext'

import {
  NavContainer,
  NavImage,
  NavItemContainer,
  ItemButton,
  ProfileImage,
  LogoutButton,
  TwoButtonContainer,
  ConfirmButton,
  PopContainer,
  CloseButton,
  PopPara,
} from './styledComponents'
import 'reactjs-popup/dist/index.css'

const Header = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme, toggleTheme} = value
      const onClicktoggle = () => {
        toggleTheme()
      }
      const onClickLogOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <NavContainer bgColor={theme}>
          <Link to="/">
            <NavImage
              src={
                theme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavItemContainer>
            <ItemButton onClick={onClicktoggle} data-testid="theme">
              {theme ? (
                <FiSun font-size="24" color="white" />
              ) : (
                <FaMoon font-size="24" />
              )}
            </ItemButton>
            <ItemButton avalable="none">
              <IoMenu color={theme && 'white'} font-size="30" />
            </ItemButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <ItemButton avalable="none" marginRight="0">
                  <FiLogOut color={theme && 'white'} font-size="25" />
                </ItemButton>
              }
            >
              {close => (
                <PopContainer popBgStyle={theme}>
                  <PopPara color={theme}>
                    Are you sure you want to logout?
                  </PopPara>

                  <TwoButtonContainer confirmStyle={theme}>
                    <CloseButton
                      type="button"
                      color={theme}
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton confirmStyle={theme} onClick={onClickLogOut}>
                      Confirm
                    </ConfirmButton>
                  </TwoButtonContainer>
                </PopContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutButton color={theme} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopContainer popBgStyle={theme}>
                  <PopPara color={theme}>
                    Are you sure you want to logout?
                  </PopPara>

                  <TwoButtonContainer confirmStyle={theme}>
                    <CloseButton
                      type="button"
                      color={theme}
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton confirmStyle={theme} onClick={onClickLogOut}>
                      Confirm
                    </ConfirmButton>
                  </TwoButtonContainer>
                </PopContainer>
              )}
            </Popup>
          </NavItemContainer>
        </NavContainer>
      )
    }}
  </NextWatchContext.Consumer>
)

export default withRouter(Header)
