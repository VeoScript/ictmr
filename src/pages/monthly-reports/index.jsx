import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/layout/default'
import SideBar from '~/components/SideBar'
import SearchBar from '~/components/search-functions/DashboardSearch'

export default function MonthlyReports() {
  return (
    <>
      <Head>
        <title>ICTMR | Monthly Reports</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between w-full h-full">
          <div className="flex flex-col w-full max-w-[4rem] h-full overflow-hidden">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-full max-w-full h-full overflow-y-auto">
            <div className="flex flex-row items-center justify-center w-full">
              <SearchBar />
            </div>
            <div className="flex flex-row justify-between items-center w-full px-6 mt-16">
              <div className="flex flex-col items-start w-full max-w-full px-10 space-y-1">
                <h1 className="font-bold text-5xl">Monthly Reports</h1>
                <h6 className="font-light text-sm">My Monthly Report</h6>
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
            <div className="flex flex-col w-full h-full px-10 py-10">
              {/* Monthly Reports Code Here... */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}