import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LottieWrapper>
      <Player
        height="40vh"
        width="40vw"
        src="https://assets9.lottiefiles.com/packages/lf20_ocusgcsp.json"
        loop
        autoplay
        speed={2.5} />
    </LottieWrapper>
  )
}

const LottieWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    `