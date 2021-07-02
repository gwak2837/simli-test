import type { NextApiRequest, NextApiResponse } from 'next'
import { tests } from '../..'

export type Response =
  | {
      id: string
      title: string
      imageUrl: string
      contents: {
        id: string
        content: string
        tag?: string // HTML 태그 종류. 기본값은 <p>
      }[]
    }
  | { message: string }

function TestResult(req: NextApiRequest, res: NextApiResponse<Response>) {
  const name = (req.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')

  const answers = req.body.answers

  if (!answers) {
    res.status(400).send({ message: `테스트 답변을 입력해주세요.` })
    return
  }

  const test = tests.find((test) => test.name === nameWithSpace)

  if (!test) {
    res.status(400).send({ message: `'${nameWithSpace}' 이름의 테스트는 존재하지 않아요.` })
    return
  }

  const resultIndex = test.results.findIndex((result) => result.condition(answers))

  if (resultIndex === -1) {
    res.status(500).send({ message: '입력한 답변에 대한 테스트 결과가 존재하지 않아요.' })
    return
  }

  const { condition, ...result } = test.results[resultIndex]

  res.status(200).json(result)
}

export default TestResult
