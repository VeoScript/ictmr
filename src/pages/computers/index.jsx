import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'

export default function Computers() {
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
            Display anything here...
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full overflow-y-auto px-10 py-10 mt-8">
          Display anything here...
        </div>
      </Layout>
    </>
  )
}