import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req, res) => {
  const data = JSON.parse(req.body)
  const configureNetworks = await prisma.networks.update({
    where: {
      id: 1
    },
    data
  })
  res.json(configureNetworks)
}