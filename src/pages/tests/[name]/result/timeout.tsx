import { Progress } from 'antd'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Padding } from 'src/components/atoms/Styles'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import Timer from 'src/components/Timer'
import useGoToPage from 'src/hooks/useGoToPage'
import { tests } from 'src/models/binary-questions'
import { GlobalContext } from 'src/pages/_app'
import { FlexContainerColumn } from 'src/styles/FlexContainer'
import styled from 'styled-components'

export const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

export const CenterPaddingH1 = styled.h1`
  padding: 3rem 1rem;
  text-align: center;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 2rem;
`

function timeout() {
  const router = useRouter()
  const testName = (router.query.name ?? '') as string
  const testNameWithSpace = testName.replace(/-/g, ' ')
  const description = '심리 테스트를 진행해보아요'
  const title = `심리테스트 - ${testNameWithSpace}`
  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead title={title} description={description}>
      <CenterPaddingH1> 빨리해 색햐 느려...</CenterPaddingH1>
      <FlexContainerColumnPadding>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>심리 테스트 하기</PrimaryButton>
      </FlexContainerColumnPadding>
    </PageHead>
  )
}
export default timeout
