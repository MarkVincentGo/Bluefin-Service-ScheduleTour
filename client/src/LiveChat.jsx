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
  }

  componentDidMount() {
    const timeHour = new Date().getHours();
    if (timeHour > 15 || timeHour < 9) {
      this.setState({ afterHours: false });
    } else {
      this.setState({ afterHours: true });
    }
  }

  handleEnter(event) {
    const { chat, input } = this.state;
    if (event.keyCode === 13) {
      console.log('enter');
      chat.push(input);
      this.setState({ chat, input: '' });
    }
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { afterHours, chat, input } = this.state;
    return (
      afterHours
        ? (
          <Wrapper>
            <Header>Talk to Bluefin</Header>
            <ChatContainer>
              <ChatEntry text={'How can we help you?'}/>
              {
                chat.map((message) => (
                  <ChatEntry text={message} />
                ))
              }
            </ChatContainer>
            <Input placeholder="Type a message..."
            onChange={this.handleInput.bind(this)}
            onKeyDown={this.handleEnter.bind(this)}/>
          </Wrapper>
        )
        : (
          <Wrapper>
            <Header>We Aint Live Chief</Header>
            <ChatContainer>
              <ChatEntry text={'How can we help you?'}
              />
              {
                chat.map((message) => (
                  <ChatEntry text={message} />
                ))
              }
            </ChatContainer>
            <Input
              type="text"
              placeholder="Type a message..."
              onChange={this.handleInput.bind(this)}
              onKeyDown={this.handleEnter.bind(this)}
              value={input}
            />
          </Wrapper>
        )

    );
  }
};


