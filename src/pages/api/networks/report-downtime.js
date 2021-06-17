import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    const data = JSON.parse(req.body)

    const reportDowntime = await prisma.downtimeReport.create({data})

    res.json(reportDowntime) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In Report Downtime '+err, "response": null}))
  }
}