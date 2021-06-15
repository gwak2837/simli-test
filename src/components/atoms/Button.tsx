import { Button } from 'antd'
import {
  BASIC_TEXT_COLOR,
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
  background: ${SECONDARY_BACKGROUND_COLOR};
  border: 1px solid ${SECONDARY_BACKGROUND_COLOR};
  color: ${BASIC_TEXT_COLOR};

  :focus {
    background: ${SECONDARY_BACKGROUND_COLOR};
    border-color: ${SECONDARY_BACKGROUND_COLOR};
    color: ${BASIC_TEXT_COLOR};
  }

  :active,
  :hover {
    background: #fff;
    border-color: ${SECONDARY_TEXT_COLOR};
    color: ${SECONDARY_TEXT_COLOR};
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
