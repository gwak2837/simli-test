import { Button } from 'antd'
import {
  BASIC_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from 'src/models/constants'
import styled from 'styled-components'

export const TestSelectButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.8rem;
  width: 175px;
  height: auto;

  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
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
