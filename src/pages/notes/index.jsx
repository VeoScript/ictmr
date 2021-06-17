import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'
import AddNotes from '~/components/modals/notes/AddNotes'
import DisplayNotes from '~/components/DisplayNotes'
import Scrollbar from 'react-smooth-scrollbar'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Notes({ notes }) {

  const check = notes.map((title) => {
    return {
      title
    }
  })

  return (
    <>
      <Head>
        <title>ICTMR | Notes</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Notes</h1>
            <h6 className="font-light text-sm text-cool-gray">Your Journal, Your Odyssey</h6>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col items-end w-full mr-5">
            <AddNotes />
          </div>
        </div>
        <div className={check[0] ? 'hidden' : 'flex flex-row items-center justify-center w-full h-full'}>
          <h1 className="font-bold text-5xl opacity-10">No album yet.</h1>
        </div>
        <Scrollbar
          className="w-full h-full overflow-y-auto"
          damping={0.1}
          thumbMinSize={20}
        >
          <div className="grid grid-cols-3 gap-4 w-full px-10 py-10 mt-8">
            <DisplayNotes notes={ notes } />
          </div>
        </Scrollbar>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const notes = await prisma.notes.findMany()
  return {
    props: {
      notes
    }
  }
}