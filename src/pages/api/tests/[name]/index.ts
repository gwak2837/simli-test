import type { NextApiRequest, NextApiResponse } from 'next'
import { tests, Question } from '../..'

export type Response =
  | {
      id: string
      questions: Question[]
    }
  | { message: string }

function TestQuestions(req: NextApiRequest, res: NextApiResponse<Response>) {
  const name = (req.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const test = tests.find((test) => test.name === nameWithSpace)

  if (!test) {
    res.status(400).send({ message: `'${nameWithSpace}' 이름의 테스트는 존재하지 않아요.` })
  } else {
    res.status(200).json({ id: test.id, questions: test.questions })
  }
}

export default TestQuestions
