import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const { id } = req.query
  const data = JSON.parse(req.body)
  const updateComputer = await prisma.computers.update({
    where: {
      id: parseInt(id)
    },
    data
  })
  res.json(updateComputer)
}