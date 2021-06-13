import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const createYear = await prisma.yearAlbum.create({data})

    res.json(createYear) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In create user '+err, "response": null}))
  }
}