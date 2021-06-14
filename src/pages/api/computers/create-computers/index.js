import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const createComputer = await prisma.computers.create({data})

    res.json(createComputer) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In create computer '+err, "response": null}))
  }
}