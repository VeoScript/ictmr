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
          <div className="flex flex-row justify-center w-full max-w-full h-full">
            <h1>This is The Whole Page</h1>
          </div>
        </div>
      </Layout>
    </>
  )
}
