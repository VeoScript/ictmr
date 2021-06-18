import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const data = JSON.parse(req.body)
  const changeProfile = await prisma.user.update({
    where: {
      id: 1
    },
    data
  })
  res.json(changeProfile)
}