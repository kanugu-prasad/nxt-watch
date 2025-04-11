import styled from 'styled-components'

export const EachVideoList = styled.li`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-right: 6px;
    width: 250px;
  }
  @media (min-width: 992px) {
    margin-right: 6px;
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 300px;
    margin-right: 15px;
  }
`
export const EachImage = styled.img`
  width: 100%;
`
export const ProfileTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 15px;
  color: ${props => (props.color ? '#ffffff' : '#000000')};
`
export const Name = styled.p`
  font-size: 13px;
  color: #64748b;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
export const NameViewYearContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Name1 = styled.p`
  font-size: 13px;
  color: #64748b;
  margin-right: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Year = styled.p`
  font-size: 13px;
  color: #64748b;
  margin-right: 10px;
`
