import Head from 'next/head'
import Layout from '~/layout/default'
import SideBar from '~/components/SideBar'

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
            <div className="flex flex-row justify-between items-center w-full px-10 mt-16">
              <div className="flex flex-col items-center w-full">
                <h1 className="font-bold text-5xl">Dashboard</h1>
                <h6 className="font-light text-base">Monitor your odyssey</h6>
              </div>
            </div>
            <div className="flex flex-row w-full h-full px-10 py-10">
              <div className="flex flex-row justify-center w-full space-x-3">
                <div className="flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  <div className="flex flex-row"></div>
                </div>
                <div className="flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  {/* <div>This is Card</div> */}
                </div>
                <div className="flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
                  {/* <div>This is Card</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
