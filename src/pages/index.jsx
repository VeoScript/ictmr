import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'
import Dashboard from '~/components/Dashboard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const date = new Date()
const getMonth = monthNames[date.getMonth()]
const getYear = date.getFullYear().toString()

export default function Home({ reports, countComputers }) {
  return (
    <>
      <Head>
        <title>ICTMR</title>
      </Head>
      <Layout>
        <div className="flex flex-row items-center justify-center w-full mt-5">
          <SearchBar />
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full max-w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Dashboard</h1>
            <h6 className="font-light text-sm text-cool-gray">ICT Monthly Report - Monitor your lifestyle based on your job description</h6>
          </div>
          <div className="flex flex-col w-full max-w-sm space-y-2 px-10">
            <Link href="/">
              <a className="flex flex-col w-full rounded-xl px-5 py-3 bg-light-panther transition ease-in-out duration-300 transform hover:scale-95">
                <div className="flex flex-row items-center w-full space-x-3">
                  <img className="w-10 h-10 object-cover rounded-full" src="https://avatars.githubusercontent.com/u/26340308?v=4" alt="avatar" />
                  <div className="flex flex-col w-full">
                    <h1 className="font-normal text-base">Jerome Villaruel</h1>
                    <h6 className="font-light text-xs text-cool-gray">SPMI IT-Coordinator</h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <Dashboard reports={ reports } getMonth={ getMonth } getYear={ getYear } getCountComputers={ countComputers } />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const reports = await prisma.reports.findMany({
    where: {
      albumYear: getYear,
      albumMonth: getMonth
    }
  })
  const countComputers = await prisma.computers.count({
    select: {
      _all: true,
      id: true
    }
  })
  return {
    props: {
      reports,
      countComputers
    }
  }
}
