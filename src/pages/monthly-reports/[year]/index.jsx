import Head from 'next/head'
import SearchBar from '~/components/search-functions/monthly-reports/SearchMonth'
import AddMonth from '~/components/modals/monthly-reports/AddMonth'
import DisplayMonth from '~/components/DisplayMonth'
import { useRouter } from 'next/router'

export default function Year() {
  const router = useRouter()
  const { year } = router.query

  return (
    <>
      <Head>
        <title>ICTMR | { year }</title>
      </Head>
      <div className="flex flex-col items-center w-full max-w-full h-screen overflow-y-auto bg-panther text-bright-white">
        <div className="flex flex-row justify-between items-center w-full px-14 mt-14">
          <div className="flex flex-col items-start w-full space-y-1">
            <h1 className="font-bold text-5xl">Reports { year }</h1>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col w-full">
            <AddMonth />
          </div>
        </div>
        <div className="flex flex-col w-full h-full px-10 py-10 mt-10">
          <DisplayMonth />
        </div>
      </div>
    </>
  )
}