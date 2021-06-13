import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  
  const year = await prisma.yearAlbum.findMany({
    select: {
      title: true,
      description: true,
      avatar: true,
      year: true,
      date: true,
      month: {
        select: {
          albumYear: true,
          month: true
        }
      }
    }
  })

  const month = await prisma.monthAlbum.findMany({
    select: {
      albumYear: true,
      month: true,
      reports: {
        select: {
          albumYear: true,
          albumMonth: true,
          requesting_person: true,
          reported_issue: true,
          resolution_made: true,
          date_reported: true,
          date_resolved: true,
        }
      }
    }
  })

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({ message: 'success', year, month }))
}