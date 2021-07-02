export type Result = {
  id: string
  title: string
  condition: (answers: Record<string, number>) => boolean
  imageUrl: string
  contents: {
    id: string
    content: string
    tag?: string // HTML 태그 종류. 기본값은 <p>
  }[]
}

type Test = {
  id: string
  results: Result[]
}

export const tests: Record<string, Test> = {
  '일-중독': {
    id: '1',
    results: [
      {
        id: '1',
        title: '일에 미친 당신',
        condition: (answers) => {
          const overdose = answers['중독']
          return overdose >= 100
        },
        imageUrl: '/result-workerholic-1.jpg',
        contents: [{ id: '1', content: '손모가지 절단만이 답입니다.' }],
      },
      {
        id: '2',
        title: '열심히 일한 당신',
        condition: (answers) => {
          const overdose = answers['중독']
          return overdose >= 50 && overdose < 100
        },
        imageUrl: '/result-workerholic-2.jpg',
        contents: [{ id: '1', content: '당신은 일꾼입니다. 미네랄을 캐세요.' }],
      },
      {
        id: '3',
        title: '자유로운 영혼의 소유자',
        condition: (answers) => {
          const overdose = answers['중독']
          const laziness = answers['게으름']
          return overdose < 50 && laziness > 40
        },
        imageUrl: '/result-workerholic-3.jpg',
        contents: [{ id: '1', content: '자유로운 정신을 가졌군요! 다음 심리테스트도 해보세요!' }],
      },
    ],
  },
  '조선시대-신분': {
    id: '2',
    results: [
      {
        id: '1',
        title: '당신은 조선의 추노입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi <= -30
        },
        imageUrl: '/result-sunbi-1.jpg',
        contents: [{ id: '1', content: '도망쳐...' }],
      },
      {
        id: '2',
        title: '당신은 조선의 노비입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi >= 0 && seonbi < 30
        },
        imageUrl: '/result-sunbi-2.jpg',
        contents: [{ id: '1', content: '총각..옷 좀 사주까?...' }],
      },
      {
        id: '3',
        title: '당신은 조선의 선비입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi >= 30
        },
        imageUrl: '/result-sunbi-3.jpg',
        contents: [{ id: '1', content: '기분 좋으세요?' }],
      },
    ],
  },
  호구: {
    id: '3',
    results: [
      {
        id: '1',
        title: '날개 없는 천사 , 티 없는 흑우!!!',
        condition: (answers) => {
          const hogu = answers['호구력']
          const hoguM = answers['호구력(돈)']
          const hoguH = answers['호구력(인간)']
          return hogu >= 80 && hoguM >= 80 && hoguH >= 80
        },
        imageUrl: '/angel.jpg',
        contents: [
          { id: '1', content: '모든 것을 양보하고 배려해주는 당신 이 시대의 진정한 인격자' },
        ],
      },
      {
        id: '2',
        title: '경주 최 부잣집 마인드 돈에 있어서 만큼은 나도 호구!!!',
        condition: (answers) => {
          const hoguM = answers['호구력(돈)']
          return hoguM >= 80
        },
        imageUrl: '/choi.jpg',
        contents: [
          {
            id: '1',
            content: '가격비교를 거부하는 당신 푼돈에 연연하지 않는 대범함을 지니셨군요!',
          },
        ],
      },
      {
        id: '3',
        title: '마더 테레사 있는 것은 아낌없이 양보하고 나눠주고 싶은 호구양!!!!',
        condition: (answers) => {
          const hoguH = answers['호구력(인간)']
          return hoguH >= 80
        },
        imageUrl: '/teresa.jpg',
        contents: [
          {
            id: '1',
            content:
              '인간관계에 있어서 늘 남을 먼저 생각하는 당신 그룹에 있어서 꼭 한명쯤은 필요한 사람이신군요! ',
          },
        ],
      },
      {
        id: '4',
        title: '개가 짖어도 기차는 간다 원리원칙을 중요시하는 NO 호구!!! ',
        condition: (answers) => {
          const hogu = answers['호구력']
          const hoguM = answers['호구력(돈)']
          const hoguH = answers['호구력(인간)']
          return hogu < 80 && hoguM < 80 && hoguH < 80
        },
        imageUrl: '/me.jpg',
        contents: [
          {
            id: '1',
            content: '남은 남 나는 나 아무리 친한사이라도 개인간의 존중을 중요시하는 사람이시군요!',
          },
        ],
      },
    ],
  },
  자아도취: {
    id: '4',
    results: [
      {
        id: '1',
        title: '당신은 심각한 자아도취증이시군요.',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism >= 100 && selfConfidence < 120
        },
        imageUrl: '/result-narcissism-1.jpg',
        contents: [
          {
            id: '1',
            content:
              '나르시시즘이란 단어를 당신의 이름으로 바꿔야 할 정도의 엄청난 자아도취 상태입니다',
          },
        ],
      },
      {
        id: '2',
        title: '당신은 넘치는 자신감으로 자아도취증 상태로 진행중이군요!',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism >= 100 && selfConfidence >= 120
        },
        imageUrl: '/result-narcissism-2.jpg',
        contents: [
          {
            id: '1',
            content:
              '주변 사람들의 시선을 신경쓰지 않고 당당한 당신! 꾸준한 노력과 약간의 겸손이 더해진다면 훌륭한 인재가 될것입니다',
          },
        ],
      },
      {
        id: '3',
        title: '당신은 평범합니다. 당신에겐 자아도취는 과도한 수식어!.',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism < 100 && selfConfidence >= 120
        },
        imageUrl: '/result-narcissism-3.jpg',
        contents: [
          {
            id: '1',
            content:
              '누구나 자아도취 해본적 있지않나요? 적어도 화장실 앞에선 내 모습이 한결 빛난다던지?',
          },
        ],
      },
      {
        id: '4',
        title: '자아도취는 커녕 자신감마저 부족한 상태네요',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism < 100 && selfConfidence < 120
        },
        imageUrl: '/result-narcissism-4.jpg',
        contents: [
          {
            id: '1',
            content:
              '당신에겐 근거없는 자신감이라도 필요합니다! 자신에 대한 부정적인 생각은 털어버리세요',
          },
        ],
      },
    ],
  },
}
