import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const { id } = req.query
  const deleteComputer = await prisma.computers.delete({
    where: {
      id: parseInt(id)
    }
  })
  res.json(deleteComputer)
}