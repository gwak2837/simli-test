import { Button } from 'antd'
import {
  BASIC_TEXT_COLOR,
  START_BACKGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_TEXT_COLOR,
  TABLET_MIN_WIDTH,
} from 'src/models/constants'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.8rem;
  height: auto;

  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
`

export const StartButton = styled(StyledButton)`
  background: ${START_BACKGROUND_COLOR};
  border: 1px solid ${START_BACKGROUND_COLOR};
  color: ${BASIC_TEXT_COLOR};
  font-size: 8rem;
  -webkit-animation: focus-in-expand-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: focus-in-expand-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  :hover {
    background: #e70c0c;
    border-color: ${START_BACKGROUND_COLOR};
    color: ${BASIC_TEXT_COLOR};
  }
  @-webkit-keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`

export const PrimaryButton = styled(StyledButton)`
  background: ${PRIMARY_BACKGROUND_COLOR};
  border: 1px solid ${PRIMARY_BACKGROUND_COLOR};
  color: ${BASIC_TEXT_COLOR};

  :focus {
    background: ${PRIMARY_BACKGROUND_COLOR};
    border-color: ${PRIMARY_BACKGROUND_COLOR};
    color: ${BASIC_TEXT_COLOR};
  }

  :active,
  :hover {
    background: #fff;
    border-color: ${PRIMARY_TEXT_COLOR};
    color: ${PRIMARY_TEXT_COLOR};
  }
`

export const SecondaryButton = styled(StyledButton)`
  background: #fff;
  border: 1px solid ${SECONDARY_TEXT_COLOR};
  color: ${SECONDARY_TEXT_COLOR};

  :focus {
    background: #fff;
    border-color: ${SECONDARY_TEXT_COLOR};
    color: ${SECONDARY_TEXT_COLOR};
  }

  :active,
  :hover {
    background: ${SECONDARY_BACKGROUND_COLOR};
    border-color: ${SECONDARY_TEXT_COLOR};
    color: ${BASIC_TEXT_COLOR};
  }
`

export const FixedButton = styled(PrimaryButton)`
  position: fixed !important;
  bottom: 0;
  z-index: 1;
  width: calc(100% - 1rem);
  max-width: ${TABLET_MIN_WIDTH};

  margin: 0.5rem;
`
