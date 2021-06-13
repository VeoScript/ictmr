import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const createMonth = await prisma.monthAlbum.create({data})

    res.json(createMonth) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In create month '+err, "response": null}))
  }
}