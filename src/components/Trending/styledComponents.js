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

export const TrendingContainer = styled.div`
  height: 100vh;
  font-family: Roboto;
`
export const TrendingTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-top: 15px;
  background-color: ${props => (props.bgColor ? '#231f20' : '#f1f1f1')};
`
export const TrendingLogoContainer = styled.div`
  height: 70px;
  width: 70px;
  text-align: center;
  border-radius: 40px;
  background-color: ${props => (props.bgColor ? '#181818' : '#e2e8f0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`
export const TrendingHeadingName = styled.h1`
  font-size: 30px;
  color: ${props => (props.color ? '#ffffff' : '#212121')};
`
export const UnorderTrendingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
  height: 73vh;
  overflow: auto;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
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
