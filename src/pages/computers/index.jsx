import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'
import AddComputer from '~/components/modals/computers/AddComputer'
import DisplayComputers from '~/components/DisplayComputers'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Computers({ computers }) {
  return (
    <>
      <Head>
        <title>ICTMR | Computers</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Computers</h1>
            <h6 className="font-light text-sm text-cool-gray">Computers and PC's Network Monitoring</h6>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col items-end w-full">
            <AddComputer computers={ computers } />
          </div>
        </div>
        <DisplayComputers computers={ computers } />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const computers = await prisma.computers.findMany({
    orderBy: [
      {
        id: 'asc'
      }
    ]
  })
  return {
    props: {
      computers
    }
  }
}