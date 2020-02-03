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
    }
  }

  componentDidMount() {
    const timeHour = new Date().getHours();
    if (timeHour > 15 || timeHour < 9) {
      this.setState({ afterHours: false });
    } else {
      this.setState({ afterHours: true });
    }
  }

  render() {
    const { afterHours } = this.state;
    console.log(afterHours)
    return (
      afterHours
        ? (
          <Wrapper>
            <Header>Talk to Bluefin</Header>
            <ChatContainer>
                <ChatEntry text={'How can we help you?'}/>
            </ChatContainer>
            <Input />
          </Wrapper>
        )
        : (
          <Wrapper>
            <Header>We Aint Live Chief</Header>
          </Wrapper>
        )

    );
  }
};


