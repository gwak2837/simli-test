type Answer = {
  id: string
  name: string
  value: number
}

type Question = {
  id: string
  question: string
  onYes: Answer[]
  onNo: Answer[]
}

type Test = {
  id: string
  questions: Question[]
  results: string[]
}

export const tests: Record<string, Test> = {
  Test_1: {
    id: '1',
    questions: [
      {
        id: '1',
        question: 'Q. 당신은 점심 먹었나요?',
        onYes: [
          { id: '1', name: 'a', value: 1 },
          { id: '2', name: 'b', value: -1 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -5 },
          { id: '2', name: 'b', value: 10 },
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
    results: ['결과1', '결과2'],
  },
}
