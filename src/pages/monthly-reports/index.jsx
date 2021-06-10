import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'
import CreateReportAlbum from '~/components/modals/monthly-reports/CreateReportAlbum'

export default function MonthlyReports() {
  return (
    <>
      <Head>
        <title>ICTMR | Monthly Reports</title>
      </Head>
      <Layout>
        <div className="flex flex-row items-center justify-center w-full">
          <SearchBar />
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full max-w-full px-10 space-y-1">
            <h1 className="font-bold text-5xl">Monthly Reports</h1>
            <h6 className="font-light text-sm">My Monthly Report</h6>
          </div>
          <div className="flex flex-col w-full max-w-sm space-y-2 px-10">
            <CreateReportAlbum />
          </div>
        </div>
        <div className="flex flex-col w-full h-full px-10 py-10">
          {/* Monthly Reports Code Here... */}
        </div>
      </Layout>
    </>
  )
}