import {Link} from 'react-router-dom'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {
  SideContainer,
  SlideFirstContainer,
  EachSideBar,
  SideFirstPara,
  SlideSecondContainer,
  SideSecondTitle,
  MediaContainer,
  MediaIcon,
  SideSecondPara,
} from './styledComponents'
import NextWatchContext from '../../context/NextWatchContext'

const sideBar = [
  {id: 'Home', name: 'Home', icon: MdHome, navGate: '/'},
  {id: 'Trending', name: 'Trending', icon: HiFire, navGate: '/trending'},
  {id: 'Gaming', name: 'Gaming', icon: SiYoutubegaming, navGate: '/gaming'},
  {
    id: 'SavedVideos',
    name: 'Saved videos',
    icon: MdPlaylistAdd,
    navGate: '/saved-videos',
  },
]

const mediaList = [
  {
    image:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
    name: 'facebook logo',
  },
  {
    image:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
    name: 'twitter logo',
  },
  {
    image:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
    name: 'linked in logo',
  },
]
const SideBar = () => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme, onChangeTab, activeTab} = value
      const onClickSideBar = id => {
        onChangeTab(id)
      }
      return (
        <SideContainer bgColor={theme} avalable="flex">
          <SlideFirstContainer>
            {sideBar.map(each => (
              <Link to={each.navGate} style={{textDecoration: 'none'}}>
                <EachSideBar
                  key={each.id}
                  bgColor={theme}
                  isActiveNight={activeTab === each.id && theme === true}
                  isActiveDay={activeTab === each.id && theme === false}
                >
                  <each.icon
                    key={each.id}
                    color={activeTab === each.id ? '#ff0000' : '#383838'}
                  />

                  <SideFirstPara
                    color={theme}
                    onClick={() => onClickSideBar(each.id)}
                  >
                    {each.name}
                  </SideFirstPara>
                </EachSideBar>
              </Link>
            ))}
          </SlideFirstContainer>

          <SlideSecondContainer color={theme}>
            <SideSecondTitle>CONTACT US</SideSecondTitle>
            <MediaContainer>
              {mediaList.map(each => (
                <MediaIcon key={each.name} src={each.image} alt={each.name} />
              ))}
            </MediaContainer>
            <SideSecondPara>
              Enjoy! Now to see your channels and recommendations!
            </SideSecondPara>
          </SlideSecondContainer>
        </SideContainer>
      )
    }}
  </NextWatchContext.Consumer>
)
export default SideBar
