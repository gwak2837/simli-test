import { useRouter } from 'next/router'
import { useContext } from 'react'
import PageHead from 'src/components/layouts/PageHead'
import { GlobalContext } from 'src/pages/_app'

const description = '결과를 확인해 보아요'

function TestResultPage() {
  const { data, data2 } = useContext(GlobalContext)

  const { query } = useRouter()

  return (
    <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
      <h1>성격유형 : “뜨거운 논쟁을 즐기는 변론가”</h1>
      <blockquote>
        가시밭길이더라도 자주적 사고를 하는 이의 길을 가십시오. 비판과 논란에 맞서서 당신의 생각을
        당당히 밝히십시오. 당신의 마음이 시키는 대로 하십시오. '별난 사람'이라고 낙인찍히는 것보다
        순종이라는 오명에 무릎 꿇는 것을 더 두려워하십시오. 당신이 중요하다고 생각하는 이념을
        위해서라면 온 힘을 다해 싸우십시오.
      </blockquote>
      <p>
        변론가형 사람은 타인이 믿는 이념이나 논쟁에 반향을 일으킴으로써 군중을 선동하는 일명 선의의
        비판자입니다. 결단력 있는 성격 유형이 논쟁 안에 깊이 내재한 숨은 의미나 상대의 전략적 목표를
        꼬집기 위해 논쟁을 벌인다고 한다면, 변론가형 사람은 단순히 재미를 이유로 비판을 일삼습니다.
        아마도 이들보다 논쟁이나 정신적 고문을 즐기는 성격 유형은 없을 것입니다. 이는 천부적으로
        재치 있는 입담과 풍부한 지식을 통해 논쟁의 중심에 있는 사안과 관련한 그들의 이념을 증명해
        보일 수 있기 때문입니다.
      </p>
      <blockquote>
        여기서 한 가지 흥미로운 사실은 변론가형 사람은 고집스러우리만치 솔직하기도 하지만 이들이
        믿고 관철하는 사안이 아님에도 불구하고 타인의 입장에서 진실 규명을 위해 지칠 줄 모르고
        논쟁을 벌인다는 점입니다.
      </blockquote>
      <p>
        논쟁을 벌이는 주체이자 선의의 비판자로서 이들은 타인의 이성적인 논리를 보다 잘 이해하고 있을
        뿐 아니라, 상대편의 관점의 차이도 정확히 꿰뚫어 봅니다.
      </p>
      <p>
        단, 이를 상호 존중과 이해를 통해 협력을 끌어내는 외교형 사람의 특질과 혼동하지 말아야
        합니다. 끊임없이 진리와 지식을 좇는 변론가형 사람들에게 있어 공격과 방어를 통해 타인의
        생각이나 이념을 다양한 각도에서 바라보며 해답을 찾는 것보다 더 좋은 방법은 없을 것입니다.
      </p>
    </PageHead>
  )
}

export default TestResultPage
