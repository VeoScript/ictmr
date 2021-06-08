import Head from 'next/head'
import Layout from '~/layout/default'

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>ICTMR</title>
      </Head>
      <Layout>
        <div className="flex flex-row items-center justify-center w-full h-full">
          <h1 className="font-black text-5xl">ICTMR</h1>
        </div>
      </Layout>
    </>
  )
}
