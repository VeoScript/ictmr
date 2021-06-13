import Head from 'next/head'
import SearchBar from '~/components/search-functions/monthly-reports/SearchMonth'
import AddMonth from '~/components/modals/monthly-reports/AddMonth'
import DisplayMonth from '~/components/DisplayMonth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Year({ getYear, getMonth }) {
  return (
    <>
      <Head>
        <title>ICTMR | { getYear.year } </title>
      </Head>
      <div className="flex flex-col items-center w-full max-w-full h-screen overflow-y-auto bg-panther text-bright-white">
        <div className="flex flex-row justify-between items-center w-full px-14 mt-14">
          <div className="flex flex-col items-start w-full space-y-1">
            <h1 className="font-bold text-5xl">Reports { getYear.year }</h1>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col w-full">
            <AddMonth year={ getYear } />
          </div>
        </div>
        <div className="flex flex-col w-full h-full px-10 py-10 mt-10">
          <DisplayMonth months={ getMonth } />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { year } = context.query
  const getYear = await prisma.yearAlbum.findFirst({
    where: {
      year: year
    }
  })
  const getMonth = await prisma.monthAlbum.findMany({
    where: {
      albumYear: year
    }
  })
  return {
    props: {
      getYear,
      getMonth
    }
  }
}