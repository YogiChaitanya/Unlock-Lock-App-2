// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
`
export const CardContainer = styled.div`
  text-align: center;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  padding: 8px;
  height: 40px;
  width: 120px;
  margin-top: 30vh;

  border-radius: 10px;
  border: none;
`

export const LockImage = styled.img`
  background-image: url(${props => props.lockImage});
  width: 100px;
`
export const Paragraph = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-family: Roboto;
`
