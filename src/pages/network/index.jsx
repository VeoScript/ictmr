import Head from 'next/head'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import DisplayNetworks from '~/components/DisplayNetworks'
import ConfigureNetworks from '~/components/modals/networks/ConfigureNetworks'
import ReportDowntime from '~/components/modals/networks/ReportDowntime'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Network({ networks, downtime }) {

  let [isOnline, setNetwork] = useState()

  if (typeof window !== 'undefined') {
    [isOnline, setNetwork] = useState(window.navigator.onLine)

    const updateNetwork = () => {
      setNetwork(window.navigator.onLine)
    }
    
    useEffect(() => {
      window.addEventListener("offline", updateNetwork)
      window.addEventListener("online", updateNetwork)
      return () => {
        window.removeEventListener("offline", updateNetwork)
        window.removeEventListener("online", updateNetwork)
      }
    })
  }

  const networkStatus = isOnline == true ? 'Connected to the Internet' : 'No Internet Found'

  return (
    <>
      <Head>
        <title>ICTMR | Network</title>
      </Head>
      <Layout>
        <Scrollbar
          className="w-full"
        >
          <div className="flex flex-row justify-between items-center w-full px-16 mt-14">
            <div className="flex flex-col items-start w-full space-y-1">
              <h1 className="font-bold text-4xl">Networks</h1>
              <h6 className="font-light text-sm text-cool-gray">Monitor your network and your internet connection</h6>
            </div>
            <div className="flex flex-row justify-end w-full space-x-2">
              <ConfigureNetworks networks={ networks } />
              <ReportDowntime />
            </div>
          </div>       
          <DisplayNetworks
            networks={ networks }
            downtime={ downtime }
            networkStatus={ networkStatus }
          />
        </Scrollbar>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const today = new Date()
  const networks = await prisma.networks.findMany({
    where: {
      id: 1
    }
  })
  const downtime = await prisma.downtimeReport.findMany({
    where: {
      create_at: {
        gte: new Date(today.toLocaleDateString("en-US")),
      }
    }
  })
  return {
    props: {
      networks,
      downtime
    }
  }
}