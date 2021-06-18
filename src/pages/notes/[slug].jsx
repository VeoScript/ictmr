import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import UpdateNotes from '~/components/modals/notes/UpdateNotes'
import DeleteNotes from '~/components/modals/notes/DeleteNotes'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function ComputerID({ notes, profile }) {

  if (!notes) {
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
        <title>ICTMR | { notes.title } </title>
      </Head>
      <Layout profile={ profile }>
        <Scrollbar
          className="w-full h-full"
        >
          <div className="flex flex-col items-center w-full h-full px-10 py-10 space-y-5">
            <div className="flex flex-row w-full max-w-6xl">
              <div className="flex flex-col w-full">
                <h1 className="font-bold text-3xl text-bright-white">{ notes.title }</h1>
                <h6 className="font-light text-xl text-bright-white">{ notes.tag }</h6>
              </div>
              <div className="flex flex-row justify-end w-full space-x-2">
                <UpdateNotes notes={ notes } />
                <DeleteNotes notes={ notes } />
              </div>
            </div>
            <div className="flex flex-row w-full h-[30rem] max-w-6xl">
              <img className="w-full h-full rounded-2xl shadow-2xl object-cover" src={ notes.image } alt="cover-photo" />
            </div>
            <div className="relative flex flex-col items-center w-full h-full">
              <div className="absolute -top-60 flex flex-col items-center w-full">
                <div className="flex flex-col w-full max-w-4xl py-10 px-10 mb-10 rounded-2xl space-y-3 opacity-90 bg-bright-white">
                  <article className="font-sans text-xl prose lg:prose-xl">
                    <ReactMarkdown>{ notes.note }</ReactMarkdown>
                  </article>
                  <div className="flex flex-col items-end w-full pt-10">
                    <span className="font-bold text-xl text-light-panther">{ notes.title }</span>
                    <span className="font-light text-base text-light-panther">
                      <Moment date={ notes.date } format="llll" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbar>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  const notes = await prisma.notes.findFirst({
    where: {
      slug: slug
    }
  })
  const profile = await prisma.user.findFirst({
    where: {
      id: 1
    }
  })
  return {
    props: {
      notes,
      profile
    }
  }
}