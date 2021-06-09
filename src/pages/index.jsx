import Head from 'next/head'
import Layout from '~/layout/default'
import SideBar from '~/components/SideBar'
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
          <div className="flex flex-row w-full max-w-[4rem] h-full">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-full max-w-full h-full">
            <div className="flex flex-row items-center justify-center w-full h-16">
              <div className="searchbox flex flex-row items-center w-full max-w-sm mt-5 bg-light-panther rounded-full">
                <input className="w-full px-5 py-3 bg-light-panther rounded-full focus:outline-none" type="text" placeholder="Search" />
                <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full px-6 mt-16">
              <div className="flex flex-col items-start w-full max-w-full px-10 space-y-1">
                <h1 className="font-bold text-5xl">Dashboard</h1>
                <h6 className="font-light text-base">ICT-MR Monitor your odyssey</h6>
              </div>
              <div className="flex flex-col w-full max-w-sm space-y-2 px-10">
                <div className="flex flex-col w-full rounded-xl px-5 py-3 bg-light-panther">
                  <div className="flex flex-row items-center w-full space-x-3">
                    <img className="w-8 h-8 object-cover rounded-full" src="https://avatars.githubusercontent.com/u/26340308?v=4" alt="avatar" />
                    <div className="flex flex-col w-full">
                      <h1 className="font-normal text-base">Jerome Villaruel</h1>
                      <h6 className="font-thin text-xs">SPMI IT-Coordinator</h6>
                    </div>
                  </div>
                </div>
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
                    <h1 className="font-bold text-7xl text-cerulean">22</h1>
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
                    <h1 className="font-bold text-7xl text-cerulean">5</h1>
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
