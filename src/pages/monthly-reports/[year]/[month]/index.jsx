import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import SearchBar from '~/components/search-functions/DashboardSearch'
import DisplayReports from '~/components/DisplayReports'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Reports({ getYear, getMonth, reports }) {

  if (!getYear || !getMonth) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }

  return (
    <>
      <Head>
        <title>ICTMR | { getYear.year } { getMonth.month }</title>
      </Head>
      <div className="flex flex-col items-center w-full max-w-full h-screen overflow-y-auto bg-panther text-bright-white">
        <div className="flex flex-row justify-between items-center w-full px-14 mt-14">
          <div className="flex flex-col items-start w-full space-y-1">
            <h1 className="font-bold text-5xl">My Report</h1>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col items-end w-full">
            <h1 className="font-bold text-5xl capitalize">{ getMonth.month }&nbsp;{ getYear.year }</h1>
          </div>
        </div>
        <div className="flex flex-col w-full h-full px-10 py-10 mt-5">
          <DisplayReports getReports={ reports } getYear={ getYear } getMonth={ getMonth } />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { year } = context.query
  const { month } = context.query
  const getYear = await prisma.yearAlbum.findFirst({
    where: {
      year: year
    }
  })
  const getMonth = await prisma.monthAlbum.findFirst({
    where: {
      albumYear: year,
      month: month
    }
  })
  const reports = await prisma.reports.findMany({
    orderBy: [
      {
        id: 'asc'
      }
    ],
    where: {
      albumYear: year,
      albumMonth: month
    }
  })
  return {
    props: {
      getYear,
      getMonth,
      reports
    }
  }
}