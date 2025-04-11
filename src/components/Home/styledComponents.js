import styled from 'styled-components'

export const HomeFistContainer = styled.div`
  height: 100vh;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Roboto;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HomeSubContainer = styled.div``

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 27vh;
  @media (min-width: 768px) {
    width: 525px;
  }
  @media (min-width: 992px) {
    width: 770px;
  }
  @media (min-width: 1200px) {
    width: 992px;
  }
`

export const BannerImageDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const BannerImage = styled.img`
  height: 30px;
  width: 100px;
`
export const XButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: none;
`
export const BannerPara = styled.p`
  font-size: 17px;
  padding-left: 20px;
  width: 200px;
  color: #212121;
`
export const GetButton = styled.button`
  font-size: 13px;
  text-align: center;
  height: 33px;
  width: 100px;
  background-color: transparent;
  border: 1px solid black;
  font-weight: 600;
  margin-left: 20px;
  color: #212121;
`
export const UnorderVideoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
  height: 60vh;
  overflow: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 10px;
  }
`
export const SearchVideosContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  padding-top: 20px;
`
export const SearchContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`
export const InputSearch = styled.input`
  height: 28px;
  width: 300px;
  padding-left: 10px;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  outline: none;
`
export const ButtonIcon = styled.button`
  background-color: ${props => (props.color ? '#424242' : '#e2e8f0')};
  height: 28px;
  width: 60px;
  text-align: center;
  outline: none;
  border: none;
  text-align: center;
  border: 1px solid #94a3b8;
  padding-top: 5px;
  border-left: none;
  outline: none;
`

export const FailureSubContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f1f5f9')};
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const FailureImage = styled.img`
  width: 300px;
  width: ${props => props.width};
`

export const FailureHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.color ? '#ffffff' : '#1e293b')};
`
export const FailurePara = styled.p`
  font-size: 20px;
  color: ${props => (props.color ? '#475569' : '#94a3b8')};
`
export const RetryButton = styled.button`
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
`
