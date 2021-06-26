import type { NextApiRequest, NextApiResponse } from 'next'
import { tests, Question } from '../..'

export type Response = {
  id: string
  questions: Question[]
} | null

function TestQuestions(req: NextApiRequest, res: NextApiResponse<Response>) {
  const name = (req.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const test = tests.find((test) => test.name === nameWithSpace)

  if (!test) {
    res.status(404).send(null)
  } else {
    res.status(200).json({ id: test.id, questions: test.questions })
  }
}

export default TestQuestions
