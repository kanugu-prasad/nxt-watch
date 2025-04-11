import NextWatchContext from '../../context/NextWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeFistContainer,
  HomeContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
} from './styledComponents'

const NotFound = () => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <HomeFistContainer data-testid="gaming">
          <Header />
          <HomeContainer>
            <SideBar />
            <FailureSubContainer bgColor={theme}>
              <FailureImage
                src={
                  theme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <FailureHeading color={theme}>Page Not Found</FailureHeading>
              <FailurePara color={theme}>
                We are sorry, the page you requested could not be found.
              </FailurePara>
            </FailureSubContainer>
          </HomeContainer>
        </HomeFistContainer>
      )
    }}
  </NextWatchContext.Consumer>
)

export default NotFound
