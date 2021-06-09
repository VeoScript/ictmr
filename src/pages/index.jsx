import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/layout/default'
import SideBar from '~/components/SideBar'
import SearchBar from '~/components/search-functions/DashboardSearch'
import ComputerIcon from '~/components/icons/ComputerIcon'
import NotebookIcon from '~/components/icons/NotebookIcon'
import DowntimeIcon from '~/components/icons/DowntimeIcon'

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>ICTMR</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between w-full h-full">
          <div className="flex flex-col w-full max-w-[4rem]">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-full max-w-full h-full">
            <div className="flex flex-row items-center justify-center w-full h-16">
              <SearchBar />
            </div>
            <div className="flex flex-row justify-between items-center w-full px-6 mt-16">
              <div className="flex flex-col items-start w-full max-w-full px-10 space-y-1">
                <h1 className="font-bold text-5xl">Dashboard</h1>
                <h6 className="font-light text-base">ICT-MR Monitor your odyssey</h6>
              </div>
              <div className="flex flex-col w-full max-w-sm space-y-2 px-10">
                <Link href="/">
                  <a className="flex flex-col w-full rounded-xl px-5 py-3 bg-light-panther transition ease-in-out duration-300 transform hover:scale-95">
                    <div className="flex flex-row items-center w-full space-x-3">
                      <img className="w-10 h-10 object-cover rounded-full" src="https://avatars.githubusercontent.com/u/26340308?v=4" alt="avatar" />
                      <div className="flex flex-col w-full">
                        <h1 className="font-normal text-base">Jerome Villaruel</h1>
                        <h6 className="font-thin text-xs">SPMI IT-Coordinator</h6>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-row w-full h-full px-10 py-10">
              <div className="flex flex-row justify-center w-full space-x-3">
                <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  <div className="relative w-full h-24">
                   <div className="flex flex-col w-full px-5 py-5">
                    <h1 className="font-semibold text-lg">Computer Monitoring</h1>
                    <h1 className="font-light text-xs">How many computers as of now?</h1>
                   </div>
                   <div className="flex flex-col justify-center w-full px-16 py-3">
                    <h1 className="font-bold text-7xl text-scarlet">22</h1>
                   </div>
                    <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
                      <ComputerIcon />
                    </div>
                  </div>
                </div>
                <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  <div className="relative w-full h-24">
                   <div className="flex flex-col w-full px-5 py-5">
                    <h1 className="font-semibold text-lg">Notes</h1>
                    <h1 className="font-light text-xs">How many notes do you have?</h1>
                   </div>
                   <div className="flex flex-col justify-center w-full px-16 py-3">
                    <h1 className="font-bold text-7xl text-scarlet">5</h1>
                   </div>
                    <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
                      <NotebookIcon />
                    </div>
                  </div>
                </div>
                <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  <div className="relative w-full h-24">
                   <div className="flex flex-col w-full px-5 py-5">
                    <h1 className="font-semibold text-lg">Internet Downtime</h1>
                    <h1 className="font-light text-xs">How many downtimes this day?</h1>
                   </div>
                   <div className="flex flex-col justify-center w-full px-16 py-3">
                    <h1 className="font-bold text-7xl text-scarlet">3</h1>
                   </div>
                    <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
                      <DowntimeIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
