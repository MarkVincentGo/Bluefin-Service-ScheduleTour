import React from 'react';
import { Wrapper, Header, ChatContainer, Input } from './styles/LiveChat-style';
import ChatEntry from './ChatEntry';

const LiveChat = () => (
  <Wrapper>
    <Header>Talk to Bluefin</Header>
    <ChatContainer>
      <ChatEntry text={'wvpoidfbvpwodfijwdpofigjwmropfivpgwjvemrpodigvjsdfpgoinwbjrpfgovinjrsdpgovinsjdfgpvoirdjnvgmpisodcpodfigjvwmcofgijimprsdowrdiovgjwmrsdopiflgjkvwnordsiflgkjvsdfigjkvnsdfkgjvmsdfikjgvsdmfigjvms'}/>
      <ChatEntry text={'hi'}/>
      <ChatEntry text={'wvpoidfbvpwodfijwdpofigjwmropfivpgwjvemrpodigvjsdfpgoinwbjrpfgovinjrsdpgovinsjdfgpvoirdjnvgmp'}/>
      <ChatEntry text={'oiumpoijfpowijfpioadsjcspodfij'}/>
      <ChatEntry text={'io'}/>
      <ChatEntry text={'wvpoidfbvpwodfijwdpofigjwmropfivpgwjvemrpodigvjsdfpgoinwbjrpfgovinjrsdpgovinsjdfgpvoirdjnvgmpisodcpodfigjvwmcofgijimprsdowrdiovgjwmrsdopiflgjkvwnordsiflgkjvsdfigjkvnsdfkgjvmsdfikjgvsdmfigjvms'}/>
      <ChatEntry text={'hi'}/>
      <ChatEntry text={'wvpoidfbvpwodfijwdpofigjwmropfivpgwjvemrpodigvjsdfpgoinwbjrpfgovinjrsdpgovinsjdfgpvoirdjnvgmp'}/>
      <ChatEntry text={'oiumpoijfpowijfpioadsjcspodfij'}/>
      <ChatEntry text={'io'}/>
    </ChatContainer>
    <Input />
  </Wrapper>
);

export default LiveChat;
