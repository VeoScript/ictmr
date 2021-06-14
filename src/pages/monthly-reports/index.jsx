import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/monthly-reports/SearchYear'
import CreateReportAlbum from '~/components/modals/monthly-reports/CreateReportAlbum'
import DisplayYear from '~/components/DisplayYear'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function MonthlyReports({ getAlbumByYear }) {

  const check = getAlbumByYear.map((title) => {
    return {
      title
    }
  })

  return (
    <>
      <Head>
        <title>ICTMR | Monthly Reports</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Monthly Reports</h1>
            <h6 className="font-light text-sm text-cool-gray">Let your work clean and organized</h6>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar albums={ getAlbumByYear } />
          </div>
          <div className="flex flex-col items-end w-full">
            <CreateReportAlbum albums={ getAlbumByYear } />
          </div>
        </div>
        <div className={check[0] ? 'hidden' : 'flex flex-row items-center justify-center w-full h-full'}>
          <h1 className="font-bold text-5xl opacity-10">No album yet.</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full overflow-y-auto px-10 py-10 mt-8">
          <DisplayYear albums={ getAlbumByYear } />
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const getAlbumByYear = await prisma.yearAlbum.findMany({
    orderBy: [
      {
        year: 'desc'
      }
    ],
    select: {
      title: true,
      description: true,
      avatar: true,
      year: true,
      date: true,
    }
  })

  return {
    props: {
      getAlbumByYear
    }
  }
}