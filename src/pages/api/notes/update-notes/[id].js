import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const { id } = req.query
  const data = JSON.parse(req.body)
  const updateNotes = await prisma.notes.update({
    where: {
      id: parseInt(id)
    },
    data
  })
  res.json(updateNotes)
}