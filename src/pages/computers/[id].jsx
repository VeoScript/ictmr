import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import Layout from '~/layout/default'
import EditComputer from '~/components/modals/computers/EditComputer'
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
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Computer Properties</h1>
            <h6 className="font-light text-sm text-cool-gray">Update or delete this details</h6>
          </div>
          <div className="flex flex-col items-end w-full mr-10">
            <EditComputer computer={ computer } />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full h-full pt-10">
          <div className="flex flex-col items-center w-full h-full px-12 rounded-2xl">
            <div className="flex flex-row items-center w-full space-x-3">
              <div className="flex flex-row items-center w-3/12 mt-3 px-5 py-5 rounded-xl bg-light-panther">
                <ComputerIcon />
                <div className="flex flex-col w-full">
                  <h1 className="font-normal text-xl">{ computer.computer_name }</h1>
                  <span className="font-light text-base text-cool-gray">Hostname</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-5/12 mt-3 px-5 py-5 rounded-xl bg-light-panther">
                <UserIcon />
                <div className="flex flex-col w-full">
                  <h1 className="font-normal text-xl">{ computer.computer_owner }</h1>
                  <span className="font-light text-base text-cool-gray">Holder</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-4/12 mt-3 px-5 py-5 rounded-xl bg-light-panther">
                <IPIcon />
                <div className="flex flex-col w-full">
                  <h1 className="font-normal text-xl">{ computer.computer_ip }</h1>
                  <span className="font-light text-base text-cool-gray">IP Address</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start w-full space-x-3">
              <div className="flex flex-row items-center w-8/12 mt-3 px-5 py-5 rounded-xl bg-light-panther">
                <DescriptionIcon />
                <div className="flex flex-col w-full">
                  <h1 className="font-normal text-xl line-clamp-3">{ computer.computer_description }</h1>
                  <span className="font-light text-base text-cool-gray">Description</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-5/12 mt-3 px-5 py-5 rounded-xl bg-light-panther">
                <OfficeIcon />
                <div className="flex flex-col w-full">
                  <h1 className="font-normal text-xl">{ computer.office_assign }</h1>
                  <span className="font-light text-base text-cool-gray">Office Assign</span>
                </div>
              </div>
            </div>
          </div>
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

function ComputerIcon() {
  return (
    <svg className="w-16 h-16 text-cool-gray opacity-50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg className="w-16 h-16 text-cool-gray opacity-50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  )
}

function IPIcon() {
  return (
    <svg className="w-16 h-16 text-cool-gray opacity-50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
    </svg>
  )
}

function DescriptionIcon() {
  return (
    <svg className="w-16 h-16 text-cool-gray opacity-50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  )
}

function OfficeIcon() {
  return (
    <svg className="w-16 h-16 text-cool-gray opacity-50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>
  )
}