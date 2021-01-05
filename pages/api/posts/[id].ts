import { NextApiRequest, NextApiResponse } from 'next'
import { getPostData } from '../../../lib/posts'

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const post = await getPostData(req.query.id as string)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(post))
}
