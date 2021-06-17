import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const addNotes = await prisma.notes.create({data})

    res.json(addNotes) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In add notes '+err, "response": null}))
  }
}