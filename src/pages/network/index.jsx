import Head from 'next/head'
import Layout from '~/layout/default'
import DisplayNetworks from '~/components/DisplayNetworks'
import ConfigureNetworks from '~/components/modals/networks/ConfigureNetworks'
import { useState, useEffect } from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Network({ networks }) {

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
        <div className="flex flex-row justify-between items-center w-full px-16 mt-14">
          <div className="flex flex-col items-start w-full space-y-1">
            <h1 className="font-bold text-4xl">Networks</h1>
            <h6 className="font-light text-sm text-cool-gray">Monitor your network and your internet connection</h6>
          </div>
          <div className="flex flex-row justify-end w-full">
            <ConfigureNetworks networks={ networks } />
          </div>
        </div>       
        <DisplayNetworks networks={ networks } networkStatus={ networkStatus } />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const networks = await prisma.networks.findMany({
    where: {
      id: 1
    }
  })
  return {
    props: {
      networks
    }
  }
}