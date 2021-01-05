import { NextApiRequest, NextApiResponse } from 'next'
import { getSortedPostsData } from '../../../lib/posts'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(getSortedPostsData()))
}
