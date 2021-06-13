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

  const countAllMonths = await prisma.reports.count({
    where: {
      albumYear: '2022',
      albumMonth: 'January'
    }, 
    select: {
      _all: true
    }
  })

  const getYear = await prisma.yearAlbum.findFirst({
    where: {
      year: '2022'
    },
    select: {
      month: {
        select: {
          month: true
        }
      }
    }
  })

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({ message: 'success', countAllMonths }))
}