type Answer = {
  id: string
  name: string // 척도 이름
  value: number // 척도 변경값
}

type Question = {
  id: string
  question: string
  onYes: Answer[] // '네' 클릭 시 수행할 계산
  onNo: Answer[] // '아니요' 클릭 시 수행할 계산
}

type Result = {
  id: string
  title: string
  imageUrl: string
  contents: {
    id: string
    content: string
    tag?: string // HTML 태그 종류. 기본값은 <p>
  }[]
}

type Test = {
  id: string
  questions: Question[]
  results: Result[]
}

export const tests: Record<string, Test> = {
  Test_1: {
    id: '1',
    questions: [
      {
        id: '1',
        question: 'Q. 나는 중독자다. 일 중독자.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          'Q. 일은 곧 나요. 나는 곧 일이다. 일과 나는 하나다. 일즉나 나즉일 -조선의 왕 정조(?).',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '3',
        question: 'Q. "일용할 양식을 주옵시고"는 "일을 주옵시고"다.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '4',
        question: 'Q. 쉰다는 것. 그것은 곧 나에게 죽음이다. 일이 아니면 죽음을 달라.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '5',
        question: 'Q. 당신의 친구가 주말 여행을 가자고 조른다. 당신은 그와 여행을 갈 것인가?',
        onYes: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '6',
        question: 'Q. 오늘의 일은 휴식의 니코틴보다 향기롭다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '7',
        question: 'Q. 나는 알코올보다 일에 취하는 편이다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '8',
        question: 'Q. 나는 일주일 중 월요일이 가장 설렌다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '일에 미친 당신,',
        imageUrl: '',
        contents: [{ id: '1', content: '손모가지 절단만이 답입니다.' }],
      },
      {
        id: '2',
        title: '열심히 일한 당신,',
        imageUrl: '',
        contents: [{ id: '1', content: '당신은 일꾼입니다. 미네랄을 캐세요.' }],
      },
      {
        id: '3',
        title: '자유로운 영혼의 소유자,',
        imageUrl: '',
        contents: [{ id: '1', content: '선비의 정신을 가졌군요! 다음 심리테스트도 해보세요!' }],
      },
    ],
  },
  Test_2: {
    id: '1',
    questions: [
      {
        id: '1',
        question: 'Q. 나는 조선의 선비다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
          { id: '3', name: '평온', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -5 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          'Q. 위층에 새로운 노비가 이사를 왔다. 그는 조선의 덕을 알지 못한다. 그와 이웃이 될 것인가?',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '짜증', value: 10 },
        ],
      },
      {
        id: '3',
        question: 'Q. 나는 배가 고플 때 의식을 셧다운 한다.',
        onYes: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
        ],
        onNo: [
          { id: '1', name: '평온', value: -10 },
          { id: '2', name: '짜증', value: 10 },
        ],
      },
      {
        id: '4',
        question: 'Q. 맞춤법 따위는 개나 줘버려. 나는 킹 세종의 뜻을 헤아리기엔 덕이 부족하다.',
        onYes: [
          { id: '1', name: '평온', value: -10 },
          { id: '2', name: '짜증', value: 10 },
          { id: '3', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
        ],
      },
      {
        id: '5',
        question: 'Q. 좀비는 인간과 친구가 될 수 있다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '6',
        question: 'Q. 나는 외제차를 타는 미제 앞잡이들과 상종할 수 없다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '7',
        question: 'Q. 위대하신 령도자! 우리 민족끼리 단합하자!',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '8',
        question: 'Q. 배고플때 먹빵을 보며 대리만족을 한다.',
        onYes: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
          { id: '3', name: '선비 정신', value: 20 },
        ],
        onNo: [{ id: '2', name: '힙 정신', value: -10 }],
      },
      {
        id: '9',
        question: 'Q. 배고플때 먹빵을 보며 배달의 민족 콜.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '평온', value: 10 },
          { id: '4', name: '짜증', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '평온', value: -10 },
          { id: '4', name: '짜증', value: 10 },
        ],
      },
      {
        id: '10',
        question:
          'Q. 중고물품을 거래하러 교대역 1번 출구로 나왔다. 저기 수상쩍은 남자가 당신에게 "당근이세요?"라고 물어볼 때 당신은 "오이인데요."라고 대답한다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -20 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 조선의 무법자입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 셧다운이 필요할 것 같군요.' }],
      },
      {
        id: '2',
        title: '당신은 조선의 노예입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 주인에게 열폭하는 것도 장수의 비결!' }],
      },
      {
        id: '3',
        title: '당신은 조선의 선비입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '기분 좋으세요?' }],
      },
    ],
  },
}
