import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  padding-top: 45px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 45px;
`
export const SubContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  padding: 20px;
  display: flex;
`
export const ImageContainer = styled.div`
  width: 50%;
  text-align: center;
`

export const TextContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  margin: 10px;
  border: 2px solid #334155;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: #f8fafc;
`

export const Image = styled.img`
  background-size: cover;
  height: 400px;
`
export const IconsContainer = styled.ul`
  display: flex;
`

export const ListItem = styled.li`
  list-style-type: none;
  color: #f1f5f9;
  margin: 10px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  height: 58vh;
  width: 100%;
  border: none;
  color: #cbd5e1;
  outline: none;
  padding: 10px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  text-decoration-color: ${props => (props.isUnderline ? '#cbd5e1' : '')};
`

export const Button1 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  cursor: hand;
`

export const Button2 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const Button3 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`
