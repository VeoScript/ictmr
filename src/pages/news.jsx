import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import DisplayNews from '~/components/DisplayNews'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function News({ profile, news }) {

  if (!profile) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }

  return (
    <>
      <Head>
        <title>ICTMR | News</title>
      </Head>
      <Layout profile={ profile }>
        <Scrollbar className="w-full h-full">
          <div className="flex flex-row justify-between items-center w-full px-16 mt-14">
            <div className="flex flex-col items-start w-full max-w-full space-y-1">
              <h1 className="font-bold text-4xl">News</h1>
              <h6 className="font-light text-sm text-cool-gray">News update powered by The New York Times</h6>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-full">
            <div className="grid grid-cols-3 gap-4 w-full px-10 pb-32 mt-10">
              <DisplayNews news={ news } />
            </div>
          </div>
        </Scrollbar>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const result = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=dzVkG8cQkVi4KsIlbG2PiRr1L6TMMUAq')
  const news = await result.json()
  const profile = await prisma.user.findFirst({
    where: {
      id: 1
    }
  })
  return {
    props: {
      news,
      profile
    }
  }
}