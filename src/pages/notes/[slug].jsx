import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function ComputerID({ notes }) {

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
      <Layout>
        <Scrollbar
          className="w-full"
        >
          <div className="flex flex-col items-center w-full h-full px-10 py-10 space-y-5">
            <div className="flex flex-row w-full h-[30rem] max-w-5xl">
              <img className="w-full h-full rounded-2xl shadow-2xl object-cover" src={ notes.image } alt="cover-photo" />
            </div>
            <div className="flex flex-row w-full max-w-5xl">
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-normal text-5xl text-scarlet">{ notes.title }</h1>
                <div className="flex flex-row space-x-2">
                  <button>Update</button>
                  <button>Delete</button>
                </div>
                <h1 className="font-light text-5xl text-cool-gray">{ notes.tag }</h1>
              </div>
            </div>
            <article className="flex flex-col w-full max-w-5xl font-light text-xl prose-2xl prose-green space-y-3">
              <h1 className="font-semibold text-2xl text-cool-gray">The Content</h1>
              <ReactMarkdown>{ notes.note }</ReactMarkdown>
              <div className="flex flex-col items-end w-full mt-10">
                <span className="font-light text-xl text-cool-gray">{ notes.title }</span>
                <span className="font-light text-base text-cool-gray">
                  <Moment date={ notes.date } format="llll" />
                </span>
              </div>
            </article>
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
  return {
    props: {
      notes
    }
  }
}