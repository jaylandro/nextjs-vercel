// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { name = 'Bobba' } = req.query;
  res.statusCode = 200
  res.json({ name })
}
