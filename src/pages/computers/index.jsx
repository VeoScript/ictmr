import Head from 'next/head'
import Layout from '~/layout/default'
import SearchBar from '~/components/search-functions/DashboardSearch'
import AddComputer from '~/components/modals/computers/AddComputer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Computers({ computers }) {
  return (
    <>
      <Head>
        <title>ICTMR | Computers</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Computers</h1>
            <h6 className="font-light text-sm text-cool-gray">Computers and PC's Network Monitoring</h6>
          </div>
          <div className="flex flex-col w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col items-end w-full">
            <AddComputer computers={ computers } />
          </div>
        </div>
        <div className="flex flex-col items-center w-full px-10 py-10 mt-8">
          <div className="flex flex-row justify-center items-center text-start text-cool-gray w-full px-10 py-5 max-w-full space-x-5 bg-light-panther rounded-full">
            <div className="head flex flex-row w-2/12">Hostname</div>
            <div className="head flex flex-row w-3/12">Holder</div>
            <div className="head flex flex-row w-5/12">Computer Description</div>
            <div className="head flex flex-row w-3/12">Office Assign</div>
            <div className="head flex flex-row w-3/12">IP Address</div>
          </div>
          {computers.map(({ computer_name, computer_owner, computer_ip, computer_description, office_assign }, i) => {
            return (
              <div className="flex flex-row justify-center items-center text-start text-sm w-full max-w-full mt-2 px-10 py-5 space-x-5 bg-light-panther rounded-full transition ease-in-out duration-300 hover:shadow-lg cursor-default" key={i}>
                <div className="head w-2/12">{ computer_name }</div>
                <div className="head w-3/12">{ computer_owner }</div>
                <div className="head w-5/12">{ computer_description }</div>
                <div className="head w-3/12">{ office_assign }</div>
                <div className="head w-3/12">{ computer_ip }</div>
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const computers = await prisma.computers.findMany({
    orderBy: [
      {
        id: 'asc'
      }
    ]
  })
  return {
    props: {
      computers
    }
  }
}