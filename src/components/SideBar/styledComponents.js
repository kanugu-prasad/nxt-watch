import styled from 'styled-components'

export const SideContainer = styled.div`
  background-color: ${props => props.bgColor && '#181818'};
  display: none;
  height: 93vh;
  font-family: Roboto;
  @media (min-width: 768px) {
    display: ${props => props.avalable};
    flex-direction: column;
    justify-content: space-between;
  }
`
export const SlideFirstContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const EachSideBar = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.isActiveNight && '#383838'};
  background-color: ${props => props.isActiveDay && '#f1f5f9'};
`
export const SideFirstPara = styled.p`
  color: ${props => (props.color ? '#ffffff' : '#606060')};
  margin-left: 10px;
  font-weight: 500;
`
export const SlideSecondContainer = styled.div`
  padding-left: 20px;
  color: ${props => (props.color ? '#ffffff' : '#475569')};
`
export const SideSecondTitle = styled.p`
  font-size: 18px;
`
export const MediaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  list-style-type: none;
`
export const MediaIcon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const SideSecondPara = styled.p`
  font-weight: bold;
  width: 210px;
  font-size: 16px;
`
