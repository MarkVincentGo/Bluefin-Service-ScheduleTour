import React from 'react';
import { Wrapper, Header, ChatContainer, Input } from './styles/LiveChat-style';
import ChatEntry from './ChatEntry';

// definitely using dynamic rendering to when this is finished.
export default class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      afterHours: null,
      chat: [],
    };
    this.input = '';
  }

  componentDidMount() {
    const timeHour = new Date().getHours();
    if (timeHour > 15 || timeHour < 9) {
      this.setState({ afterHours: false });
    } else {
      this.setState({ afterHours: true });
    }
  }

  handleInput(event) {
    this.input = (event.target.value);
    console.log(this.input)

    if (event.target.keyCode === 13) {
      this.sendChat();
    }
  }

  sendChat() {
    console.log('invoked')
    const { chat } = this.state;
    chat.push(this.input);
    this.setState({ chat });
  }

  render() {
    const { afterHours, chat } = this.state;
    return (
      afterHours
        ? (
          <Wrapper>
            <Header>Talk to Bluefin</Header>
            <ChatContainer>
                <ChatEntry text={'How can we help you?'}/>
            </ChatContainer>
            <Input placeholder="Type a message..."/>
          </Wrapper>
        )
        : (
          <Wrapper>
            <Header>We Aint Live Chief</Header>
            <ChatContainer>
                <ChatEntry text={'How can we help you?'}/>
            </ChatContainer>
            <Input
              placeholder="Type a message..."
              onChange={this.handleInput.bind(this)}/>
          </Wrapper>
        )

    );
  }
};


