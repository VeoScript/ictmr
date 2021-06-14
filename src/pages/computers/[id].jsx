import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import Layout from '~/layout/default'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function ComputerID({ computer }) {

  if (!computer) {
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
        <title>ICTMR | { computer.computer_name } </title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-center items-center w-full h-full">
          <h1>{ computer.computer_name }</h1>
          <h1>{ computer.computer_owner }</h1>
          <h1>{ computer.computer_ip }</h1>
          <h1>{ computer.computer_description }</h1>
          <h1>{ computer.office_assign }</h1>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const computer = await prisma.computers.findFirst({
    where: {
      id: parseInt(id)
    }
  })
  return {
    props: {
      computer
    }
  }
}