import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const { id } = req.query
  const deleteNotes = await prisma.notes.delete({
    where: {
      id: parseInt(id)
    }
  })
  res.json(deleteNotes)
}