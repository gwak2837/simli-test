import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'
import PageHead from '../components/layouts/PageHead'
import { useContext } from 'react'
import {
FlexContainerBetween,
FlexContainerAlignCenter,
FlexUpperPadding,
} from 'src/styles/FlexContainer'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { GlobalContext } from './_app'
import { StartButton } from 'src/components/atoms/Button'
import { StartEffectTag } from 'src/styles/SpecialEffect'

const Container = styled.divmargin-top: 50px; padding: 20px;
const Register = styled.h3margin: 16px 2px 16px 16px; font-size: 18px; font-weight: bold; line-height: 1;
const Input = styled.inputposition: relative; overflow: hidden; width: 100%; height: 40px; margin: 0 0 8px; padding: 5px 39px 5px 11px; border: solid 1px #dadada; background: #fff; box-sizing: border-box;

const Button = styled.divfont-size: 18px; font-weight: 700; line-height: 49px; display: block; width: 100%; height: 49px; margin: 16px 0 7px; cursor: pointer; text-align: center; color: #fff; border: none; border-radius: 0; background-color: #03c75a; ${({ disabled }) => disabled &&
background-color: #efefef;
}
function RegisterForm() {
return (

회원가입
ID

PassWord

Name

Phone

Date of birth

Address
  <Button>회원가입 완료!</Button>
</Container>
)
}

export default RegisterForm