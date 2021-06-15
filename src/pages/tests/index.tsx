import { PrimaryButton } from 'src/components/atoms/Button'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import styled from 'styled-components'

const TestSelectButton = styled(PrimaryButton)``

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  const goToTestFisrtTest = useGoToPage('/tests/Test_1')
  const goToTestSecondTest = useGoToPage('/tests/Test_2')
  const goToTestThirdTest = useGoToPage('/tests/Test_3')
  const goToTestFourthTest = useGoToPage('/tests/Test_4')

  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <div>
        <TestSelectButton onClick={goToTestFisrtTest}>심리Test1</TestSelectButton>
        <TestSelectButton onClick={goToTestSecondTest}>심리Test2</TestSelectButton>
        <TestSelectButton onClick={goToTestThirdTest}>심리Test3</TestSelectButton>
        <TestSelectButton onClick={goToTestFourthTest}>심리Test4</TestSelectButton>
      </div>
    </PageHead>
  )
}

export default TestsPage
