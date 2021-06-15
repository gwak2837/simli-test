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
        question: 'Q. 당신은 점심 먹었나요?',
        onYes: [
          { id: '1', name: '충족감', value: 1 },
          { id: '2', name: '허기짐', value: -1 },
        ],
        onNo: [
          { id: '1', name: '심리적 안정감', value: -5 },
          { id: '2', name: '배고픔', value: 10 },
        ],
      },
      {
        id: '2',
        question: 'Q. 당신은 저녁 먹었나요?',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 배가 고픕니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '빨리 밥을 먹으세요' }],
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
          { id: '1', name: '선비 정신', value: 1 },
          { id: '2', name: '힙 정신', value: -1 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -5 },
          { id: '2', name: 'b', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          'Q. 위층에 새로운 노비가 이사를 왔다. 그는 조선의 덕을 알지 못한다. 그와 이웃이 될 것인가?',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '3',
        question: 'Q. 나는 배가 고플 때 의식을 셧다운 한다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '4',
        question: 'Q. 맞춤법 따위는 개나 줘버려. 나는 킹 세종의 뜻을 헤아리기엔 덕이 부족하다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '5',
        question: 'Q. 좀비는 인간과 친구가 될 수 있다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
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
