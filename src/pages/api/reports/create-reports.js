import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const createReport = await prisma.reports.create({data})

    res.json(createReport) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In create report '+err, "response": null}))
  }
}