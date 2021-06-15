import {
  TEST2_QUESTION1,
  TEST2_QUESTION2,
  TEST2_QUESTION3,
  TEST2_QUESTION4,
  TEST2_QUESTION5,
} from 'src/models/question-test-2'
export const tests: Record<string, Record<string, string[]>> = {
  Test_1: {
    questions: ['Q. 당신은 점심 먹었나요?', 'Q. 당신은 저녁 먹었나요?'],
    results: ['결과1', '결과2'],
  },
  Test_2: {
    questions: [
      TEST2_QUESTION1,
      TEST2_QUESTION2,
      TEST2_QUESTION3,
      TEST2_QUESTION4,
      TEST2_QUESTION5,
    ],
    results: ['결과1', '결과2'],
  },
  Test_3: {
    questions: ['Q. 당신은 점심 먹었나요?', 'Q. 당신은 저녁 먹었나요?'],
    results: ['결과1', '결과2'],
  },
  Test_4: {
    questions: ['Q. 당신은 점심 먹었나요?', 'Q. 당신은 저녁 먹었나요?'],
    results: ['결과1', '결과2'],
  },
}
