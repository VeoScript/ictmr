import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/ComputerSearch'
import AddComputer from '~/components/modals/computers/AddComputer'
import DisplayComputers from '~/components/DisplayComputers'
import Scrollbar from 'react-smooth-scrollbar'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Computers({ computers }) {
  return (
    <>
      <Head>
        <title>ICTMR | Computers</title>
      </Head>
      <Layout>
        <Scrollbar
          className="w-full h-full overflow-y-auto"
          damping={0.1}
          thumbMinSize={20}
        >
          <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
            <div className="flex flex-col items-start w-full px-10 space-y-1">
              <h1 className="font-bold text-4xl">Computers</h1>
              <h6 className="font-light text-sm text-cool-gray">Computers and PC's Network Monitoring</h6>
            </div>
            <div className="flex flex-col w-full">
              <SearchBar computers={ computers } />
            </div>
            <div className="flex flex-col items-end w-full mr-5">
              <AddComputer computers={ computers } />
            </div>
          </div>
          <DisplayComputers computers={ computers } />
        </Scrollbar>
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