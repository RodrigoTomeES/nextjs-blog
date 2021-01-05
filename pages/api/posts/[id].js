import { getPostData } from '../../../lib/posts'

export default async function handler(req, res) {
  const post = await getPostData(req.query.id)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(post))
}
