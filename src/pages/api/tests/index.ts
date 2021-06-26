import type { NextApiRequest, NextApiResponse } from 'next'
import { tests } from '..'

export type Response = {
  id: string
  name: string
  imageUrl: string
  description: string
}[]

function Tests(req: NextApiRequest, res: NextApiResponse<Response>) {
  const testList = tests.map((test) => ({
    id: test.id,
    name: test.name,
    imageUrl: test.imageUrl,
    description: test.description,
  }))

  res.status(200).json(testList)
}

export default Tests
