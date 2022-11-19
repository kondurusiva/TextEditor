import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  SubContainer,
  ImageContainer,
  Heading,
  Image,
  TextContainer,
  IconsContainer,
  ListItem,
  TextArea,
  Button1,
  Button2,
  Button3,
} from './StyledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underLine: false}

  boldText = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  italicText = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  underLineText = () => {
    this.setState(prevState => ({
      underLine: !prevState.underLine,
    }))
  }

  render() {
    const {bold, italic, underLine} = this.state

    return (
      <MainContainer>
        <SubContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <IconsContainer>
              <ListItem>
                <Button1
                  data-testid="bold"
                  isBold={bold}
                  type="button"
                  onClick={this.boldText}
                >
                  <VscBold size={25} />
                </Button1>
              </ListItem>
              <ListItem>
                <Button2
                  data-testid="italic"
                  isItalic={italic}
                  type="button"
                  onClick={this.italicText}
                >
                  <GoItalic size={25} />
                </Button2>
              </ListItem>
              <ListItem>
                <Button3
                  data-testid="underline"
                  isUnderline={underLine}
                  type="button"
                  onClick={this.underLineText}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ListItem>
            </IconsContainer>
            <hr color="#334155" />
            <TextArea isBold={bold} isItalic={italic} isUnderline={underLine} />
          </TextContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
