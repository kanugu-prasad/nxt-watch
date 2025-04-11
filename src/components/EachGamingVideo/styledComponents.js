import styled from 'styled-components'

export const EachVideoList = styled.li`
  margin-bottom: 30px;
  margin-right: 20px;
  width: 180px;

  @media (min-width: 768px) {
    width: 150px;
  }
`
export const ThumbnailUrl = styled.img`
  width: 100%;
`
export const Title = styled.p`
  color: ${props => (props.color ? '#ffffff' : '#000000')};
`

export const ViewCount = styled.p`
  color: #616e7c;
`
