import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  try {
    // const { month } = JSON.parse(req.body)
    const month = "February"

    const createUser = await prisma.yearAlbum.create({
      data: {
        title:'',
        description:'',
        avatar:'',
        year:'',
        date:'',
        month: month
      }
    })

    res.json(createUser) 
  } catch(err) {
    res.json(JSON.stringify({"status": 500, "error": 'In create user '+err, "response": null}))
  }
}