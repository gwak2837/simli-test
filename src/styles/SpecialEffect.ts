import { keyframes } from 'styled-components'

export const FocusInExpandFwd = keyframes`
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-800px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
`
