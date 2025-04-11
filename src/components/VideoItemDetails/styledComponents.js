import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  height: 100vh;
  font-family: Roboto;
`

export const VideoItemSecondContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoPopContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 20px;
  min-height: 90vh;
  width: 100%;
`

export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.color ? '#f1f1f1' : '#212121')};
  font-weight: 400;
`
export const ViewTimeLikeSaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ViewCount = styled.p`
  color: #616e7c;
  font-size: 15px;
  margin-right: 20px;
`
export const PublishedAt = styled.p`
  color: #616e7c;
  font-size: 15px;
`
export const LikeUnlikeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ListItem = styled.div``
export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 15px;
  border: none;
  color: ${props => (props.likeColor ? '#2563eb' : '#64748b')}!important;

  outline: none;
  background-color: transparent;
  margin-right: 10px;
`
export const DislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 15px;
  border: none;
  color: ${props => (props.dislikeColor ? '#2563eb' : '#64748b')}!important;
  outline: none;
  background-color: transparent;
  margin-right: 10px;
`
export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 15px;
  border: none;
  color: ${props => (props.saveColor ? '#2563eb' : '#64748b')};
  outline: none;
  background-color: transparent;
  margin-right: 10px;
`

export const LikePara = styled.p`
  margin-right: 6px;
`
export const HorizontalLine = styled.hr`
  height: 2px;
  background-color: #d7dfe9;
`
export const ThumbnailUrl = styled.img`
  height: 60px;
  width: 60px;
`
export const ThumbnailAndName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const NameSubscriberContainer = styled.div``
export const Name = styled.p`
  color: ${props => (props.color ? '#f8fafc' : '#231f20')};
  font-size: 17px;
`
export const SubscriberCount = styled.p`
  color: #94a3b8;
  font-size: 15px;
`
export const Description = styled.p`
  color: ${props => (props.color ? '#f8fafc' : '#475569')};
  font-size: 17px;
  padding-left: 0px;
  @media (min-width: 768px) {
    padding-left: 80px;
  }
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
