import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <Player
      src="https://assets9.lottiefiles.com/packages/lf20_ocusgcsp.json"
      loop
      autoplay
      speed={2.5} />
  )
}